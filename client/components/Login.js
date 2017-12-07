import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue:""
        };

         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.inputValue)

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
            <ProgressBar/>
            <div className="card">
            <div className="container">
              <h3>Welcome to MyWorkStatus</h3>
            </div>
            <form className="card-content">

            <p>
                <label>User Name</label>
            <input value={this.state.inputValue}  onChange={evt => this.updateInputValue(evt)} className="input col s2" type="text" />

            </p>
            <button onClick={()=>{this.props.onLogin(inputValue)}} className="waves-effect waves-light btn">Login</button>
            </form>
            </div>
        </div>
    );
  }
}

export default Login;
