// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Flip from './Flip'

const render = (AppComponent) => {
  ReactDOM.render(
    <AppComponent />,
    document.querySelector('#root'),
  )
}

render(App)
render(Flip)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./App').default
    render(nextApp)
  })
}

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Flip', () => {
    // eslint-disable-next-line global-require
    const nextFlip = require('./Flip').default
    render(nextFlip)
  })
}
