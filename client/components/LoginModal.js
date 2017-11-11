import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ReactSpinner from 'react-spinjs';

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password:""
        }


    }

    userTextChanged(event)
    {
        this.setState({user: event.target.value});
    }

    passwordTextChanged(event)
    {
        this.setState({password: event.target.value});
    }

    render() {
        let {user,password} = this.state;
        let {isLoading} = this.props;
        return <div>
            {
                this.props.isShowingModal &&
                <ModalContainer onClose={this.props.onClose}>
                    <ModalDialog onClose={this.props.onClose}>
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title"><h3 className="center-align">Login</h3></span>
                                        <form className="container">
                                            <div className="row">
                                                <form className="col s12">
                                                    <div className="row">
                                                        <div className="input-field col s6">
                                                            <i className="material-icons prefix">account_circle</i>
                                                            <input id="icon_prefix" type="text" className="validate" onChange={this.userTextChanged.bind(this)}/>
                                                            <label for="icon_prefix">User Name</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <i className="material-icons prefix">phone</i>
                                                            <input id="icon_telephone" type="tel" className="validate" onChange={this.passwordTextChanged.bind(this)}/>
                                                            <label for="icon_telephone">Password</label >
                                                        </div>
                                                    </div>
                                                    <div className="row center-align">
                                                        <a  onClick={()=>{this.props.onLogin(user,password)}} className="waves-effect waves-light btn">Login</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalDialog>
                </ModalContainer>
            }
        </div>;
    }
}

export default LoginModal