import React, {PropTypes} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import UserListFilterTable from './UserListFilterTable'

class UserBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption:""
        };

         this.handleChange = this.handleChange.bind(this);

    }

    handleChange(selectedOption) {
        this.setState({ selectedOption });
        this.props.OnStatusChange(selectedOption)
  }

    render() {
        let {user} = this.props;
        let {selectedOption} = this.state;
        return (
          <div className="container" >
            <div className="card">
            <div className="container">
              <p className="center-align">Hello M.{user.lastName}, you are {user.status}</p>
            </div>
            <form className="card-content center-align">
                <div className="row">
                     <p>Update my current status:</p>
                    <div className="input-field col s12">
                        <Select
                                name="form-field-name"
                                value={this.state.selectedOption.value}
                                onChange={this.handleChange}
                                options={[
                                  { value: 'on vacation', label: 'Vacation' },
                                  { value: 'working', label: 'Working' },
                                  { value: 'on business trip', label: 'Business Trip' },
                                ]}
                              />
                      </div>
                </div>
            </form>
            </div>
              <div className="card">
            <div className="container">
              <p className="center-align">List of epmloyees</p>
            </div>
            <form className="card-content center-align">
                <div className="row">
                    <div className="input-field col s12">
                        <UserListFilterTable userId={this.props.user.id}/>
                      </div>
                </div>
            </form>
            </div>
        </div>
    );
    }
}

export default UserBoard