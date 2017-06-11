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

class Flip extends React.Component {
  state = {
    score: 0,
  }

  renderOutput() {
    if (!this.state.flipResult) {
      return null
    }
    if (this.state.flipResult !== this.state.guessed) {
      return <div style={styles.failure}>{this.state.flipResult}: you lose!</div>
    }
    return <div style={styles.success}>{this.state.flipResult}: you win!</div>
  }

  render() {
    return (
      <App
        title="Flip"
        controls={
          <div className="row">
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
        output={
          <div>
            <span style={{ color: 'green' }}>Score: <strong>{this.state.score}</strong></span>
            { this.renderOutput() }
          </div>
        }
      />
    )
  }
}

export default Flip
