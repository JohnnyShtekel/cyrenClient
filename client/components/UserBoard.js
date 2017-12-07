import React, {PropTypes} from 'react';

class UserBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password:"",
            tpId:""
        }
    }



    render() {
        return (
          <h1>hello {this.props.userName}</h1>
    );
    }
}

export default UserBoard