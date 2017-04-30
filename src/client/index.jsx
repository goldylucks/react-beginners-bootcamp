import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import FlipApp from './Flip'
import GuessnumberApp from './Guessnumber'
import FizzbuzzApp from './Fizzbuzz'
import AuthApp from './Auth'
import SeriesApp from './Series'

const render = (AppComponent, appName) => {
  ReactDOM.render(
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    document.getElementById(`${appName}-app`),
  )
}

if (module.hot) {
  module.hot.accept('./Flip', () => {
    const NextFlipApp = require('./Flip').default // eslint-disable-line global-require
    render(NextFlipApp, 'flip')
  })
}

render(FlipApp, 'flip')

ReactDOM.render(
  <GuessnumberApp />,
  document.getElementById('guessnumber-app'),
)

ReactDOM.render(
  <FizzbuzzApp />,
  document.getElementById('fizzbuzz-app'),
)


ReactDOM.render(
  <AuthApp />,
  document.getElementById('auth-app'),
)


ReactDOM.render(
  <SeriesApp />,
  document.getElementById('series-app'),
)
