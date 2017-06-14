// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Flip from './Flip'
import Nav from './Nav'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'

const Mother = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={() => <h1>Mother knows best dear</h1>} />
      <Route path="/flip" component={Flip} />
      <Route path="/guessnumber" component={Guessnumber} />
      <Route path="/fizzbuzz" component={Fizzbuzz} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </div>
)

export default Mother
