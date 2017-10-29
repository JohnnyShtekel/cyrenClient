import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import {login} from '../api/ClientApi'
import '../assets/styles/mainContainer.css'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginState:"please login",
            button: "login"
        };

         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

       this.props.router.push('/login');


        let loginInput = this.refs.login;
        console.log(this.refs.login.value);
        login('yoni',"1").then(respone => {
            console.log(respone);
            if(respone.data.access_token)
            {
                 this.setState({
                loginState: "logged In"
            });
            }

        })

    }




  render() {
    let state = this.state.loginState;
    return (
        <div id="vcontainer"><div id="hcontainer">
            <div id="content">
            <h1>State: {state}</h1>
        <form onSubmit={ this.handleSubmit }>
        <input placeholder="githug login" ref="login" />
        <button>Login</button>
      </form>
            </div>
        </div>
        </div>

    );
  }
}

export default Main;
