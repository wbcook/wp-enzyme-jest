import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PayeesListRedux from './PayeesListRedux';

export default class PayeesManagerRedux extends Component {
  render() {
    const columnConfig = [
      { field: 'payeeName' },
      { field: 'address.city', label: 'City' },
      { field: 'address.state', label: 'State' },
    ];

    const { match } = this.props;

    return (
      <div>
        <h2>Payees Manager</h2>

        <Route
          path={`${match.url}/list`}
          render={() => <PayeesListRedux columnConfig={columnConfig} />}
        />

        <Route
          path={match.url}
          exact
          render={() => <Redirect to={`${match.url}/list`} />}
        />
      </div>
    );
  }
}
