import React, { Component } from 'react';
import PayeesList from './PayeesList';
import Spinner from '../common/Spinner';
import { dao } from './payees-dao';

export default class PayeesManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payees: [],
    };
  }

  componentDidMount() {
    dao
    .search()
    .then(payees => this.setState({ payees }))
    .catch(error => {
      console.error('Data fetch went wrong: ', error.code, error.message);
    });
  }

  render() {
    const columnConfig = [
      { field: 'payeeName' },
      { field: 'address.city', label: 'City' },
      { field: 'address.state', label: 'State' },
    ];

    return (
      <div>
        <h2>Payees Manager</h2>
        {
          this.state.payees.length > 0 ? 
          <PayeesList columnConfig={columnConfig} data={this.state.payees} /> :
          <Spinner size="6x"/>
        }
        
      </div>
    );
  }
}
