import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css'

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

  module.hot.accept('./Guessnumber', () => {
    const NextGuessnumberApp = require('./Guessnumber').default // eslint-disable-line global-require
    render(NextGuessnumberApp, 'guessnumber')
  })

  module.hot.accept('./Fizzbuzz', () => {
    const NextFizzbuzzApp = require('./Fizzbuzz').default // eslint-disable-line global-require
    render(NextFizzbuzzApp, 'fizzbuzz')
  })

  module.hot.accept('./Auth', () => {
    const NextAuthApp = require('./Auth').default // eslint-disable-line global-require
    render(NextAuthApp, 'auth')
  })

  module.hot.accept('./Series', () => {
    const NextSeriesApp = require('./Series').default // eslint-disable-line global-require
    render(NextSeriesApp, 'series')
  })
}

render(FlipApp, 'flip')
render(GuessnumberApp, 'guessnumber')
render(FizzbuzzApp, 'fizzbuzz')
render(AuthApp, 'auth')
render(SeriesApp, 'series')
