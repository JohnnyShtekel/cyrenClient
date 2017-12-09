import React from 'react';
// import '../assets/styles/main.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue:""
        };

        this.handleLogin = this.handleLogin.bind(this);

    }
    
    handleLogin(e)
    {
        e.preventDefault();
        this.props.onLogin(this.state.inputValue)
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

  render() {
      let {inputValue} = this.state;
    return (
        <div className="container" >
            <div className="card">
            <div className="container">
              <h3>Welcome to MyWorkStatus</h3>
            </div>
            <form className="card-content">

            <p>
                <label>User Name</label>
            <input value={this.state.inputValue}  onChange={evt => this.updateInputValue(evt)} className="input col s2" type="text" />

            </p>
            <button onClick={this.handleLogin} className="waves-effect waves-light btn">Login</button>
            </form>
            </div>
        </div>
    );
  }
}

export default Login;
