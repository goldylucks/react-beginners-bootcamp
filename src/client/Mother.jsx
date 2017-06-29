// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Flip from './Flip'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'
import Nav from './Nav'

const Mother = () =>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" render={() => <h1>Mother loves her little baby</h1>} />
      <Route path="/flip" component={Flip} />
      <Route path="/guessnumber" component={Guessnumber} />
      <Route path="/fizzbuzz" component={Fizzbuzz} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </div>

export default Mother
