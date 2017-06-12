// @flow

import React from 'react'

import App from './App'

const randomNumberBetween = (min, max) => Math.floor((Math.random() * (max - min)) + 1) + min

const styles = {
  success: {
    color: 'limegreen ',
  },
  failure: {
    color: 'red',
  },
}

class Guessnumber extends React.Component {
  state = {
    targetNumber: randomNumberBetween(1, 100),
    guessedNumber: 0,
    guessedNumberInput: '',
  }

  guess() {
    this.setState({
      guessedNumber: Number(this.state.guessedNumberInput),
    })
  }

  renderOutput() {
    const { guessedNumber, targetNumber } = this.state
    if (!guessedNumber) {
      return null
    }
    if (targetNumber > guessedNumber) {
      return <div style={styles.failure}>Too low ...</div>
    }
    if (targetNumber < guessedNumber) {
      return <div style={styles.failure}>Too High ...</div>
    }

    return <div style={styles.success}>Success! The number is {targetNumber}</div>
  }
  render() {
    return (
      <App
        title="Guessnumber"
        controls={
          <div className="input-group">
            <input
              className="form-control"
              type="number"
              placeholder="Place your guess here"
              min={1}
              max={100}
              value={this.state.guessedNumberInput}
              onChange={evt => this.setState({ guessedNumberInput: evt.target.value })}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={() => this.guess()}>Guess</button>
            </span>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Guessnumber
