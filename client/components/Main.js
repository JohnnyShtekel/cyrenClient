import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hello:"dsadasd"
        };
    }

  render() {
    let a = this.state.hello;
    return (
      <div>
        <h1>Hello Web Pos {a}</h1>
      </div>
    );
  }
}

export default Main;
