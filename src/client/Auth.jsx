import React from 'react'

import App from './App'

class Auth extends React.Component {
  state = {
    role: 'guest',
    nameInput: 'Spidy',
  }

  signup() {
    this.setState({
      name: this.state.nameInput,
      role: 'newUser',
    })
  }

  login() {
    this.setState({
      name: this.state.nameInput,
      role: 'user',
    })
  }

  renderOutput() {
    const { role, name } = this.state
    if (role === 'guest') {
      return <p>Hello guest</p>
    }
    if (role === 'user') {
      return <p>Welcome back {name}</p>
    }
    return <p>Welcome aboard {name}!</p>
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
                  value={this.state.nameInput}
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
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
                <button className="btn btn-primary btn-block" onClick={() => this.signup()}>Signup</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.login()}>Login</button>
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
