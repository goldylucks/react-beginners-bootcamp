import React from 'react'

const Auth = () =>
  <div className="container app-container">
    <h2>Auth app!</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
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
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          <p>Hello guest</p>
          <p>Welcome back Spidy</p>
          <p>Welcome aboard Spidy!</p>
        </div>
      </div>
    </div>
  </div>

export default Auth
