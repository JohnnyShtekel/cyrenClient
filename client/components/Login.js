import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import {getTime,getFullDate} from '../helpers/DateHelper'
import LoginModal from './LoginModal'
import {login, isLoggedin, isRegister} from '../api/ClientApi'



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: false,
            token: '',
            pos: '1',
            touchPoint: '1',
            date: new Date().getDate(),
            time: new Date().getTime(),
        }

        this.handleModalChange = this.handleModalChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    componentWillMount() {

        isRegister("1").then(isRegister => {
            if(isRegister)
            {
                this.props.router.push('/register');
            }
        });

        isLoggedin().then(isLogged => {
            if(isLogged)
            {
                this.props.router.push('/main');
            }
        });

        this.setState({
            pos: "1",
            touchPoint: "1",
            date: getFullDate(),
            time: getTime(),
            isShowingModal: false
        });

    }

    handleModalChange(e) {
        e.preventDefault();
        let modalState = this.state.isShowingModal;
        this.setState({
            isShowingModal: !modalState
        })
    }

    handleLogin(user, password)
    {
        this.setState({
            isLoading :true
        });

        login(user,password).then(isLogged => {
            if(isLogged)
            {
                this.props.router.push('/main');
            }

        })


    }

     render() {
        let {pos,date, time, isShowingModal,isLoading} = this.state;
        return (
            <div className="vcontainer">
                <div className="hcontainer">

                    <div className="content" id="gradLogin">
                        <ProgressBar percent={100} />
                        <LoginModal isShowingModal={isShowingModal}
                                    onClose={this.handleModalChange} onLogin={this.handleLogin} isLoading={isLoading}  />
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
                                <a  onClick={this.handleModalChange} className="waves-effect waves-light btn">Login</a>
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