// @flow

import React from 'react'
import { connect } from 'react-redux'

import { guess } from './guessnumberActions'

import App from '../../App'

const styles = {
  success: {
    color: 'limegreen ',
  },
  failure: {
    color: 'red',
  },
}

type Props = {
  guessedNumber: number,
  targetNumber: number,
  onGuess: Function,
}

class Guessnumber extends React.Component {
  state = {
    guessedNumberInput: '',
  }

  props: Props

  guess() {
    this.props.onGuess(Number(this.state.guessedNumberInput))
  }

  renderOutput() {
    const { guessedNumber, targetNumber } = this.props
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

const mapStateToProps = state => state.guessnumber

const mapDispatchToProps = dispatch => ({
  onGuess: guessedNumber => dispatch(guess(guessedNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Guessnumber)
