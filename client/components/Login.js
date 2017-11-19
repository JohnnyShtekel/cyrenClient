import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import {getTime,getFullDate} from '../helpers/DateHelper'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import {login, isLoggedin, isRegistered, register} from '../api/ClientApi'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            token: '',
            pos: '1',
            touchPoint: '1',
            date: new Date().getDate(),
            time: new Date().getTime(),
            isShowingLoginModal: false,
            isShowingRegisterModal: false
        }

        this.handleLoginModalChange = this.handleLoginModalChange.bind(this);
        this.handleRegisterModalChange = this.handleRegisterModalChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentWillMount() {

       isRegistered("1").then(isRegistered => {

            if(isRegistered == false)
            {
                this.setState({
                    isShowingRegisterModal: true,
                    isShowingLoginModal: false,
                });
            }

            if(isRegistered)
            {
                isLoggedin().then(isLoggedin => {
                    if(isLoggedin)
                    {
                        this.props.router.push('/main');
                    }
                });
            }
        });

       this.setState({
            pos: "1",
            touchPoint: "1",
            date: getFullDate(),
            time: getTime(),
            isShowingRegisterModal: false

        });

    }

    handleLoginModalChange(e) {
        e.preventDefault();
        let modalState = this.state.isShowingLoginModal;

        console.log("modalState in function:" + modalState);
        this.setState({
            isShowingLoginModal: !modalState
        })
    }

    handleRegisterModalChange(e) {
        e.preventDefault();
        let modalState = this.state.isShowingRegisterModal;
        this.setState({
            isShowingRegisterModal: !modalState
        })
    }

    handleLogin(user, password)
    {
        this.setState({
            isLoading :true
        });

        login(user,password).then(isLoggedin => {
            if(isLoggedin)
            {
                this.props.router.push('/main');
            }
        })
    }

    handleRegister(user, password, tpId)
    {
        register(user,password,tpId).then(isRegistered => {
            if(isRegistered)
            {
                this.setState({
                    isShowingRegisterModal: false,
                    isShowingLoginModal: true,
                });
            }
        })
    }

     render() {
        let {pos,date, time, isShowingRegisterModal, isShowingLoginModal, isLoading} = this.state;

         console.log("modalState in render:" + isShowingLoginModal);

        return (
            <div className="vcontainer">
                <div className="hcontainer">

                    <div className="content" id="gradLogin">
                        <ProgressBar percent={100} />
                        <LoginModal isShowingLoginModal={isShowingLoginModal}
                                    onClose={this.handleLoginModalChange} onLogin={this.handleLogin}  />

                        <RegisterModal isShowingRegisterModal={isShowingRegisterModal}
                                    onClose={this.handleRegisterModalChange} onRegister={this.handleRegister} />
                        <div className="row">
                            <div className="col s12 m4 l2"></div>

                            <div  className="s12 m4 l8 center-align">
                        <div className="card hoverable">
                            <div className="row">
                                <div className="row center-align hoverable" >
                                    <img className="responsive-img circle" src="https://www.ncr.com/sites/default/files/ncr-bb-rgb-2017-1000px.png" height="120" width="120"/>
                                </div>
                                <div className="row center-align">
                                    <div className="row hoverable">
                                        <font size="4"> POS: {pos} | {time} | {date} </font>
                                    </div>
                                    <div className="row hoverable">
                                        <font size="4"> hello, please login </font>
                                    </div>
                                </div>
                            </div>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="circle" src="http://learnenglishteens.britishcouncil.org/sites/teens/files/rs5994_465129591-low.jpg" height="250" width="20"/>
                            </div>
                            <div className="card-content">
                                <a  onClick={this.handleLoginModalChange} className="waves-effect waves-light btn">Login</a>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                </div>
            </div>
        );
      }
    }

    export default Login;