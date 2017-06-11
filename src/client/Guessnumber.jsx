import React from 'react'

import App from './App'

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
    targetNumber: 73,
    guessedNumber: 20,
    guessedNumberInput: '',
  }

  renderOutput() {
    if (this.state.targetNumber > this.state.guessedNumber) {
      return <div style={styles.failure}>Too low ...</div>
    }
    if (this.state.targetNumber < this.state.guessedNumber) {
      return <div style={styles.failure}>Too High ...</div>
    }

    return <div style={styles.success}>Success! The number is {this.state.targetNumber}</div>
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
              <button className="btn btn-primary">Guess</button>
            </span>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Guessnumber
