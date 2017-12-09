import React from 'react';
import Login from './Login'
import UserBoard from './UserBoard'
import {login, setUserStatus} from '../api/ClientApi'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,
            user:{}
        };

         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleStatusChange = this.handleStatusChange.bind(this);
    }


    handleStatusChange(status) {
        let user = this.state.user;
        setUserStatus(user,status.value).then(user => {
            if (user.isDataSet) {
                this.setState({
                    user: JSON.parse(user.body)
                });
            }
            else {
                Materialize.toast('failed to update status', 4000)
            }
        });
    }


    
    handleSubmit(userName) {
        login(userName).then(user => {
            if (user.isLoggedin) {
                console.log(user.body);
                this.setState({
                    isLogin: true,
                    user: JSON.parse(user.body)
                });
            } else {
                Materialize.toast('user name is not exist', 4000)
            }
        });
    }



  render() {
    let {isLogin,user} = this.state;
      if (isLogin != false) {
          return <UserBoard OnStatusChange={this.handleStatusChange} user={user}/>
      } else return <Login onLogin={this.handleSubmit}/>;
  }
}

export default Main;
