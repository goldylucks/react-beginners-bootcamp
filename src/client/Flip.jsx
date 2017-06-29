// @flow

import React from 'react'

import App from './App'

class Flip extends React.Component {

  state = {
    score: 0,
    guessed: '',
    flipResult: '',
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeypress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress)
  }

  onKeypress = (evt: Object) => {
    if (evt.key === 'h') {
      this.guess('Heads')
      return
    }

    if (evt.key === 'r') {
      this.reset()
    }
  }

  guess(guessed: string) {
    const flipResult = Math.random() > 0.45 ? 'Heads' : 'Tails'
    this.setState({
      flipResult,
      score: flipResult === guessed ? this.state.score + 1 : this.state.score - 1,
      guessed,
    })
  }

  reset() {
    this.setState({
      score: 0,
      guessed: '',
      flipResult: '',
    })
  }

  renderOutput() {
    const { guessed, flipResult } = this.state
    if (!guessed) {
      return null
    }
    if (guessed === flipResult) {
      return <div style={{ color: 'limegreen' }}>{flipResult}: you win!</div>
    }
    return <div style={{ color: 'red' }}>{flipResult}: you lose!</div>
  }

  render() {
    return (
      <App
        title={'Flip'}
        controls={
          <div>
            <div className="col-md-4">
              <button onClick={() => { this.guess('Heads') }} className="btn btn-primary btn-block">Heads</button>
            </div>
            <div className="col-md-4">
              <button onClick={() => { this.guess('Tails') }} className="btn btn-primary btn-block">Tails</button>
            </div>
            <div className="col-md-4">
              <button onClick={() => { this.reset() }} className="btn btn-default btn-block">Reset</button>
            </div>
          </div>
        }
        output={
          <div>
            <span style={{ color: 'green' }}>Score: <strong>{this.state.score}</strong></span>
            {this.renderOutput()}
          </div>
        }
      />
    )
  }

}

export default Flip
