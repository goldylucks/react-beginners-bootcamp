// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = (AppComponent) => {
  ReactDOM.render(
    <AppComponent />,
    document.querySelector('#root'),
  )
}

render(App)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./App').default
    render(nextApp)
  })
}
