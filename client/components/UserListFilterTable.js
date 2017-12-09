import React, {PropTypes} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../assets/styles/main.css'
import {getUserList} from '../api/ClientApi'

const statusType = {
  'working': 'working',
  'on vacation': 'on vacation',
  'on business trip': 'on business trip'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}


class UserListFilterTable extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user:[]
        };
    }

     componentWillMount() {
            getUserList(this.props.userId).then(users => {
                if (users.isRecivedUsers) {
                    this.setState({
                        users: users.users
                    });
                } else {
                    Materialize.toast('server error', 4000)
                }
            });
        }

  handlerClickCleanFiltered() {
    this.refs.name.cleanFiltered();
  }

  rowClassNameFormat(row, rowIdx)
  {
    let rowstatus = row.status.toLowerCase();
    return rowstatus.includes("vacation") === true ? 'redtd' : 'nothing';
  }

  render() {
      let {users} = this.state;
    return (
      <BootstrapTable ref='table' data={ users } trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn  width='200' isKey={true} dataField='id'>
           ID
          <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>clear filters</a>
        </TableHeaderColumn>
        <TableHeaderColumn  ref='name' dataField='name' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Employee Name</TableHeaderColumn>
        <TableHeaderColumn width='350' ref='status' dataField='status' filter={ { type: 'SelectFilter', options: statusType } } dataFormat={ enumFormatter } formatExtraData={ statusType }>Status</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default UserListFilterTable