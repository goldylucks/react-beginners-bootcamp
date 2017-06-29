// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Flip from './Flip'

const Mother = () =>
  <div>
    <Switch>
      <Route exact path="/" render={() => <h1>Mother loves her little baby</h1>} />
      <Route path="/flip" component={Flip} />
    </Switch>
  </div>

export default Mother
