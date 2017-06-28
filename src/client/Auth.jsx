// @flow

import React from 'react'

import App from './App'

class Auth extends React.Component {

  state = {
    name: 'Batman',
    nameInput: '',
    role: 'newUser',
  }

  renderOutput() {
    const { role, name } = this.state
    if (role === 'guest') {
      return <p>Hello guest</p>
    }

    if (role === 'user') {
      return <p>welcome back {name}</p>
    }
    return <p>welcome aboard {name}</p>
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
                <button onClick={() => { console.log('Signup') }} className="btn btn-primary btn-block">Signup</button>
              </div>
              <div className="col-md-6">
                <button onClick={() => { console.log('Login') }} className="btn btn-default btn-block">Login</button>
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
