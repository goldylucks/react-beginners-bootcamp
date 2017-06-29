// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import Mother from './Mother'

const render = (AppComponent) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>,
    document.querySelector('#root'),
  )
}

render(Mother)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Mother', () => {
    // eslint-disable-next-line global-require
    const nextMother = require('./Mother').default
    render(nextMother)
  })
}
