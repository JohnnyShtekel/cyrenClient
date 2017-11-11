import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import {login} from '../api/ClientApi'
import '../assets/styles/mainContainer.css'
import Menu from '../components/Menu'

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

            }

        })

    }




  render() {
    let state = this.state.loginState;
    return (
        <div className="vcontainer">
            <div className="hcontainer">
                 <div className="content">
                     <ProgressBar percent={100} />
                         <Menu/>
                 </div>
             </div>
        </div>

    );
  }
}

export default Main;
