import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import Login from './Login'
import UserBoard from './UserBoard'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,
            userName:""
        };

         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(e)
        this.setState({
            isLogin: true,
            userName:e
        });


    }



  render() {
    let {isLogin,userName} = this.state;
      if (isLogin != false) {
          return <UserBoard userName={userName}/>
      } else return <Login onLogin={this.handleSubmit}/>;
  }
}

export default Main;
