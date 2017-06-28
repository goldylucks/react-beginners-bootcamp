// @flow

import React from 'react'

import App from './App'

class Guessnumber extends React.Component {

  state = {
    guessedNumberInput: '25',
    guessedNumber: 71,
    targetNumber: 75,
  }

  renderOutput() {
    if (this.state.guessedNumber > this.state.targetNumber) {
      return <div style={{ color: 'red' }}>[{this.state.guessedNumber}] Too high ...</div>
    }
    if (this.state.guessedNumber < this.state.targetNumber) {
      return <div style={{ color: 'red' }}>[{this.state.guessedNumber}] Too low ...</div>
    }
    return <div style={{ color: 'limegreen' }}>[{this.state.guessedNumber}] Success! The number is { this.state.targetNumber }</div>
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
              <button onClick={() => { console.log('Guess') }} className="btn btn-primary">Guess</button>
            </span>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Guessnumber
