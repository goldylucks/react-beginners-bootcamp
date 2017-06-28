// @flow

import React from 'react'

import App from './App'

const randomNumberBetween = (min, max) => (Math.floor((Math.random() * (max - min)) + 1) + min)

class Guessnumber extends React.Component {

  state = {
    guessedNumberInput: '0',
    guessedNumber: 0,
    targetNumber: randomNumberBetween(1, 100),
  }

  guessNumber() {
    this.setState({ guessedNumber: Number(this.state.guessedNumberInput) })
  }

  renderOutput() {
    const { guessedNumber, targetNumber } = this.state
    if (!guessedNumber) {
      return null
    }
    if (guessedNumber > targetNumber) {
      return <div style={{ color: 'red' }}>[{guessedNumber}] Too high ...</div>
    }
    if (guessedNumber < targetNumber) {
      return <div style={{ color: 'red' }}>[{guessedNumber}] Too low ...</div>
    }
    return <div style={{ color: 'limegreen' }}>[{guessedNumber}] Success! The number is { this.state.targetNumber }</div>
  }

  render() {
    return (
      <App
        title="Guessnumber"
        controls={
          <div className="input-group">
            <input
              value={this.state.guessedNumberInput}
              onChange={(evt) => { this.setState({ guessedNumberInput: evt.target.value }) }}
              className="form-control"
              type="number"
              placeholder="Place your guess here"
              min={1}
              max={100}
            />
            <span className="input-group-btn">
              <button onClick={() => this.guessNumber()} className="btn btn-primary">Guess</button>
            </span>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Guessnumber
