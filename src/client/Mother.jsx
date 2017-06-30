// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import flip from './modules/flip'
import guessnumber from './modules/guessnumber'
import auth from './modules/auth'
import Nav from './Nav'
import Fizzbuzz from './Fizzbuzz'
import Stats from './Stats'

class Mother extends React.Component {
  state = {
    fizzbuzzStrings: [],
  }

  hitmeFizzbuzz = (fizzbuzzStrings: Array<string>) => {
    this.setState({ fizzbuzzStrings })
  }

  fizzbuzzReset = () => {
    this.setState({ fizzbuzzStrings: [] })
  }

  render() {
    const { fizzbuzzStrings } = this.state
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <h1>Mother knows best dear</h1>} />
          <Route path="/flip" render={() => <flip.Page />} />
          <Route path="/guessnumber" render={() => <guessnumber.Page />} />
          <Route path="/fizzbuzz" render={() => <Fizzbuzz outputStrings={fizzbuzzStrings} onHitme={this.hitmeFizzbuzz} onReset={this.fizzbuzzReset} />} />
          <Route path="/auth" render={() => <auth.Page onLogin={this.login} onSignup={this.signup} />} />
          <Route path="/stats" render={() => <Stats fizzbuzzStrings={fizzbuzzStrings} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
