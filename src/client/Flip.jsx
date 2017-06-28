import React from 'react'

import App from './App'

class Flip extends React.Component {

  state = {
    score: 0,
    guessed: '',
    flipResult: '',
  }

  renderOutput() {
    if (!this.state.guessed) {
      return null
    }
    if (this.state.guessed === this.state.flipResult) {
      return <div style={{ color: 'limegreen' }}>{this.state.flipResult}: you win!</div>
    }
    return <div style={{ color: 'red' }}>{this.state.flipResult}: you lose!</div>
  }

  render() {
    return (
      <App
        title="Flip"
        controls={
          <div>
            <div className="col-md-4">
              <button onClick={() => { console.log('Heads') }} className="btn btn-primary btn-block">Heads</button>
            </div>
            <div className="col-md-4">
              <button onClick={() => { console.log('Tails') }} className="btn btn-primary btn-block">Tails</button>
            </div>
            <div className="col-md-4">
              <button onClick={() => { console.log('Reset') }} className="btn btn-default btn-block">Reset</button>
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
