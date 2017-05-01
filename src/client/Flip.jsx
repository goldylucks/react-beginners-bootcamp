// @flow

import React from 'react'

import App from './App'

const styles = {
  score: {
    color: 'green',
  },
  success: {
    color: 'limegreen',
  },
  failure: {
    color: 'red',
  },
}

class FlipApp extends React.Component {
  state = {
    score: 0,
    flipResult: '',
    guessed: '',
  }

  guess(guessed: string) {
    const { score } = this.state
    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    this.setState({
      guessed,
      flipResult,
      score: flipResult === guessed ? score + 1 : score - 1,
    })
  }

  reset() {
    this.setState({ score: 0, flipResult: '', guessed: '' })
  }

  renderOutput() {
    const { flipResult, guessed } = this.state
    if (!flipResult) {
      return null
    }
    if (flipResult === guessed) {
      return <div style={styles.success}>{flipResult}: You win!</div>
    }
    return <div style={styles.failure}>{flipResult}: You lose!</div>
  }

  render() {
    return (
      <App
        appName="Flip (using App)"
        controls={
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-primary btn-block" onClick={() => this.guess('Heads')}>Heads</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-block" onClick={() => this.guess('Tails')}>Tails</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
            </div>
          </div>
        }
        output={
          <div>
            <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
            {this.renderOutput()}
          </div>
        }
      />
    )
  }
}

export default FlipApp
