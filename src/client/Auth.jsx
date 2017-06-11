import React from 'react'

import App from './App'

class Auth extends React.Component {
  state = {
    role: 'guest',
    name: 'Spidy',
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
        output={
          <div>
            <p>Hello guest</p>
            <p>Welcome back {this.state.name}</p>
            <p>Welcome aboard {this.state.name}!</p>
          </div>
        }
      />
    )
  }
}

export default Auth
