// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Flip from './Flip'
import Nav from './Nav'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'

class Mother extends React.Component {
  state = {
    role: 'guest',
    name: '',
  }

  signup = (name: string) => {
    this.setState({
      name,
      role: 'newUser',
    })
  }

  login = (name: string) => {
    this.setState({
      name,
      role: 'user',
    })
  }

  render() {
    const { role, name } = this.state
    return (
      <div>
        <Nav role={role} name={name} />
        <Switch>
          <Route exact path="/" component={() => <h1>Mother knows best dear</h1>} />
          <Route path="/flip" component={Flip} />
          <Route path="/guessnumber" component={Guessnumber} />
          <Route path="/fizzbuzz" component={Fizzbuzz} />
          <Route path="/auth" render={() => <Auth role={role} name={name} onLogin={this.login} onSignup={this.signup} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
