import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import ReduxIncrementer from './ReduxIncrementer';
import ControlledVsUncontrolled from './ControlledVsUncontrolled';
import AuthExample from './AuthExample';
import ContextDemo from './ContextDemo';

export default class DemosManager extends Component {
  render() {
    const {match} = this.props;
    return (
      <div className="row">
        <nav className="col-3">
          <ul>
            <li>
              <Link to={`${match.url}/controlled-vs-uncontrolled`}>Controlled vs Uncontrolled components</Link>
            </li>
            <li>
              <Link to={`${match.url}/redux-incrementer`}>Redux Incrementer</Link>
            </li>
            <li>
              <Link to={`${match.url}/context-demo`}>Context Demo</Link>
            </li>
            <li>
              <Link to={`${match.url}/auth-example`}>Authorization Example</Link>
            </li>
          </ul>
        </nav>
        <div className="col">
          <Route path={`${match.url}/controlled-vs-uncontrolled`} component={ControlledVsUncontrolled} />
          <Route path={`${match.url}/redux-incrementer`} component={ReduxIncrementer} />
          <Route path={`${match.url}/context-demo`} component={ContextDemo} />
          <Route path={`${match.url}/auth-example`} component={AuthExample} />
        </div>
      </div>
    );
  }
}
