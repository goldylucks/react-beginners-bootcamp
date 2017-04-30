import React from 'react'
import ReactDOM from 'react-dom'

import FlipApp from './Flip'
import GuessnumberApp from './Guessnumber'
import FizzbuzzApp from './Fizzbuzz'
import AuthApp from './Auth'
import SeriesApp from './Series'

ReactDOM.render(
  <FlipApp />,
  document.getElementById('flip-app'),
)

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
