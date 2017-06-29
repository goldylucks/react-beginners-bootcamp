// @flow

import React from 'react'

import App from './App'

type Props = {
  greetingMessage: string,
  onLogin: Function,
  onSignup: Function,
}

class Auth extends React.Component {

  state = {
    nameInput: '',
  }

  props: Props

  signup = () => {
    this.props.onSignup(this.state.nameInput)
  }

  login = () => {
    this.props.onLogin(this.state.nameInput)
  }

  render() {
    return (
      <App
        title="Auth"
        controls={
          <div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  placeholder="Name"
                  className="form-control"
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
                  value={this.state.nameInput}
                />
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
                <button onClick={this.signup} className="btn btn-primary btn-block">Signup</button>
              </div>
              <div className="col-md-6">
                <button onClick={this.login} className="btn btn-default btn-block">Login</button>
              </div>
            </div>
          </div>
        }
        output={this.props.greetingMessage}
      />
    )
  }
}

export default Auth
