// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'

const render = (AppComponent) => {
  ReactDOM.render(
    <AppComponent />,
    document.querySelector('#welcome-app'),
  )
}

render(Welcome)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Welcome', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./Welcome').default
    render(nextApp)
  })
}
