import React from 'react'
import ReactDOM from 'react-dom'

import FlipApp from './Flip'

ReactDOM.render(
  <FlipApp />,
  document.getElementById('flip-app'),
)

const GuessnumberApp = () => <h2>Guess Number!</h2>
ReactDOM.render(
  <GuessnumberApp />,
  document.getElementById('guessnumber-app'),
)

const FizzbuzzApp = () => <h2>Fizzbuzz!</h2>
ReactDOM.render(
  <FizzbuzzApp />,
  document.getElementById('fizzbuzz-app'),
)

const AuthApp = () => <h2>Auth!</h2>

ReactDOM.render(
  <AuthApp />,
  document.getElementById('auth-app'),
)

const SeriesApp = () => <h2>Series!</h2>

ReactDOM.render(
  <SeriesApp />,
  document.getElementById('series-app'),
)
