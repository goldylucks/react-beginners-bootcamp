// @flow

import React from 'react'

import App from './App'

const styles = {
  success: {
    color: 'limegreen',
  },
  failure: {
    color: 'red',
  },
}

type Props = {
  score: number,
  onGuess: Function,
  onReset: Function,
}

class Flip extends React.Component {
  state = {
    flipResult: '',
    guessed: '',
  }

  props: Props

  guess(guessed: string) {
    const { score } = this.props
    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    this.setState({
      guessed,
      flipResult,
    })
    this.props.onGuess(flipResult === guessed ? score + 1 : score - 1)
  }

  reset() {
    this.setState({
      guessed: '',
      flipResult: '',
    })
    this.props.onReset()
  }

  renderOutput() {
    const { flipResult, guessed } = this.state
    if (!flipResult) {
      return null
    }
    if (flipResult !== guessed) {
      return <div style={styles.failure}>{flipResult}: you lose!</div>
    }
    return <div style={styles.success}>{flipResult}: you win!</div>
  }

  render() {
    return (
      <App
        title="Flip"
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
            <span style={{ color: 'green' }}>Score: <strong>{this.props.score}</strong></span>
            { this.renderOutput() }
          </div>
        }
      />
    )
  }
}

export default Flip
