import React from 'react'

import App from './App'

class Flip extends React.Component {

  state = {
    score: 0,
    guessed: '',
    flipResult: 'Heads',
  }

  renderOutput() {
    if (!this.state.guessed) {
      return <span style={{ color: 'green' }}>Score: <strong>{this.state.score}</strong></span>
    }
    if (this.state.guessed === this.state.flipResult) {
      return (
        <div>
          <span style={{ color: 'green' }}>Score: <strong>{this.state.score}</strong></span>
          <div style={{ color: 'limegreen' }}>{this.state.flipResult}: you win!</div>
        </div>
      )
    }
    return (
      <div>
        <span style={{ color: 'green' }}>Score: <strong>{this.state.score}</strong></span>
        <div style={{ color: 'red' }}>{this.state.flipResult}: you lose!</div>
      </div>
    )
  }

  render() {
    return (
      <App
        title="Flip"
        controls={
          <div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-block">Heads</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-block">Tails</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-default btn-block">Reset</button>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Flip
