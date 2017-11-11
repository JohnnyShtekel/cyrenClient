import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import {register} from '../api/ClientApi'


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }



    }

    componentWillMount() {



    }


    render() {

        return (
            <div className="vcontainer">
                <div className="hcontainer">
                    <div className="content">
                        <ProgressBar percent={100} />

                    </div>
                </div>
            </div>

        );
    }
}

export default Register;