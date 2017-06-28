// @flow

import React from 'react'

import App from './App'

class Auth extends React.Component {

  state = {
    name: 'Batman',
    role: 'newUser',
  }

  renderOutput() {
    if (this.state.role === 'guest') {
      return <p>Hello guest</p>
    }

    if (this.state.role === 'user') {
      return <p>welcome back {this.state.name}</p>
    }
    return <p>welcome aboard {this.state.name}</p>
  }

  render() {
    return (
      <App
        title="Auth"
        controls={
          <div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input placeholder="Name" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input type="email" placeholder="Email" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input type="password" placeholder="Password" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block">Signup</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block">Login</button>
              </div>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Auth
