// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Welcome from './Welcome'
import Flip from './Flip'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'

const render = (AppComponent, appname) => {
  ReactDOM.render(
    <AppComponent />,
    document.querySelector(`#${appname}-app`),
  )
}

render(Welcome, 'welcome')
render(Flip, 'flip')
render(Guessnumber, 'guessnumber')
render(Fizzbuzz, 'fizzbuzz')
render(Auth, 'auth')

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Welcome', () => {
    // eslint-disable-next-line global-require
    const nextWelcome = require('./Welcome').default
    render(nextWelcome, 'welcome')
  })
}

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Flip', () => {
    // eslint-disable-next-line global-require
    const nextFlip = require('./Flip').default
    render(nextFlip, 'flip')
  })
}

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Guessnumber', () => {
    // eslint-disable-next-line global-require
    const nextGuessnumber = require('./Guessnumber').default
    render(nextGuessnumber, 'guessnumber')
  })
}

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Fizzbuzz', () => {
    // eslint-disable-next-line global-require
    const nextFizzbuzz = require('./Fizzbuzz').default
    render(nextFizzbuzz, 'fizzbuzz')
  })
}

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Auth', () => {
    // eslint-disable-next-line global-require
    const nextAuth = require('./Auth').default
    render(nextAuth, 'auth')
  })
}
