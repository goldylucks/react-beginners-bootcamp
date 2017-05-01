import React from 'react'

class Auth extends React.Component {
  state = {
    emailInput: '',
    nameInput: '',
    passwordInput: '',
    role: 'guest',
    name: '',
  }

  login() {
    this.setState({ role: 'user', name: this.state.nameInput })
  }

  signup() {
    this.setState({ role: 'newUser', name: this.state.nameInput })
  }

  renderOutput() {
    if (this.state.role === 'guest') {
      return <div>Hello, guest</div>
    }
    if (this.state.role === 'user') {
      return <div>Welcome back {this.state.name}!</div>
    }
    return <div>Welcome aboard, {this.state.name}!</div>
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Auth app!</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  placeholder="Name"
                  className="form-control"
                  value={this.state.nameInput}
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
                />
              </div>
              <h4><strong>nameInput</strong>: {this.state.nameInput}</h4>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={this.state.emailInput}
                  onChange={evt => this.setState({ emailInput: evt.target.value })}
                />
              </div>
              <h4><strong>emailInput</strong>: {this.state.emailInput}</h4>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={this.state.passwordInput}
                  onChange={evt => this.setState({ passwordInput: evt.target.value })}
                />
              </div>
              <h4><strong>passwordInput</strong>: {this.state.passwordInput}</h4>
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
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">{this.renderOutput()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Auth
