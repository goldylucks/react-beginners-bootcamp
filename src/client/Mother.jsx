// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import flip from './modules/flip'
import Nav from './Nav'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'
import Stats from './Stats'

const randomNumberBetween = (min, max) => Math.floor((Math.random() * (max - min)) + 1) + min

class Mother extends React.Component {
  state = {
    role: 'guest',
    name: '',
    flipScore: 0,
    guessedNumber: 0,
    targetNumber: randomNumberBetween(1, 100),
    fizzbuzzStrings: [],
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

  numberGuess = (guessedNumber: number) => {
    this.setState({ guessedNumber })
  }

  hitmeFizzbuzz = (fizzbuzzStrings: Array<string>) => {
    this.setState({ fizzbuzzStrings })
  }

  fizzbuzzReset = () => {
    this.setState({ fizzbuzzStrings: [] })
  }

  render() {
    const { role, name, guessedNumber, targetNumber, fizzbuzzStrings } = this.state
    return (
      <div>
        <Nav role={role} name={name} />
        <Switch>
          <Route exact path="/" component={() => <h1>Mother knows best dear</h1>} />
          <Route path="/flip" render={() => <flip.Page />} />
          <Route path="/guessnumber" render={() => <Guessnumber guessedNumber={guessedNumber} targetNumber={targetNumber} onGuess={this.numberGuess} />} />
          <Route path="/fizzbuzz" render={() => <Fizzbuzz outputStrings={fizzbuzzStrings} onHitme={this.hitmeFizzbuzz} onReset={this.fizzbuzzReset} />} />
          <Route path="/auth" render={() => <Auth role={role} name={name} onLogin={this.login} onSignup={this.signup} />} />
          <Route path="/stats" render={() => <Stats guessedNumber={guessedNumber} targetNumber={targetNumber} fizzbuzzStrings={fizzbuzzStrings} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
