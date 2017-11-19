import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ReactSpinner from 'react-spinjs';

class RegisterModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password:"",
            tpId:""
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

    tpIdTextChanged(event)
    {
        this.setState({tpId: event.target.value});
    }

    render() {
        let {user,password, tpId} = this.state;

        return <div>
            {
                this.props.isShowingRegisterModal &&
                <ModalContainer onClose={this.props.onClose}>
                    <ModalDialog onClose={this.props.onClose}>
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title"><h3 className="center-align">Register</h3></span>
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
                                                            <i className="material-icons prefix">lock_outline</i>
                                                            <input id="icon_telephone" type="tel" className="validate" onChange={this.passwordTextChanged.bind(this)}/>
                                                            <label for="icon_telephone">Password</label >
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <i className="material-icons prefix">computer</i>
                                                            <input id="icon_telephone" type="tel" className="validate" onChange={this.tpIdTextChanged.bind(this)}/>
                                                            <label for="icon_telephone">Touch Point ID</label >
                                                        </div>
                                                    </div>
                                                    <div className="row center-align">
                                                        <a  onClick={()=>{this.props.onRegister(user,password, tpId)}} className="waves-effect waves-light btn">Register Touch Point</a>
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

export default RegisterModal