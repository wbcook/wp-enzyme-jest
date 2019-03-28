import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    };
  }

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = event => {
    console.log(`Login details: `, this.state);
    this.props.submitLogin(this.state);
  };

  render() {
    return (
      <div className="card">
        <form>
          <div className="card-header bg-info text-white">
            <h2>Login Form</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                onChange={this.updateState}
                value={this.state.userName}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.updateState}
                value={this.state.password}
              />
            </div>
            <div>
              <button className="btn btn-info" type="button" onClick={this.handleLogin}>
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
