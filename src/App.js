import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeFactory } from './create-store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';
// import { company } from './resources/app-config';
import Footer from './Footer';
import DemosManager from './demos/DemosManager';
import LoginForm from './LoginForm';
import PayeesManager from './payees/PayeesManagerRedux';
import PeopleManager from './PeopleManager';
import TransactionsManager from './TransactionsManager';
import CategoriesManager from './CategoriesManager';
import Home from './Home';

library.add(faCog);
// const store = storeFactory.createThunkStore();
const store = storeFactory.createAxiosStore();

class App extends Component {
  handleLogin = event => {
    console.log('App.handleLogin called');
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <header>
              <h1>Discover Fake Banking Services</h1>
              <small>Serving Chicagoland since Tuesday morning</small>
              <hr />
            </header>
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/demos">Demos</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/payees">Payees</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/people">People</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/transactions">Transactions</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </nav>

            <Route path="/demos" component={DemosManager} />
            <Route
              path="/login"
              render={() => (
                <div className="row">
                  <div className="col-4 offset-4">
                    <LoginForm submitLogin={this.handleLogin} />
                  </div>
                </div>
              )}
            />
            <Route path="/payees" component={PayeesManager} />
            <Route path="/people" component={PeopleManager} />
            <Route path="/transactions" component={TransactionsManager} />
            <Route path="/categories" component={CategoriesManager} />
            <Route path="/" exact component={Home} />

            <Footer company="Corporation, Inc." />
            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
