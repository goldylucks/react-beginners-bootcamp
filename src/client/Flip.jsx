import React from 'react'

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
    flipResult: null,
    guessed: null,
  }

  renderOutput() {
    if (!this.state.flipResult) {
      return null
    }
    if (this.state.flipResult === this.state.guessed) {
      return <div style={styles.success}>{this.state.flipResult}: You win!</div>
    }
    return <div style={styles.failure}>{this.state.flipResult}: You lose!</div>
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Flip</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
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
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">
              <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
              {this.renderOutput()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlipApp
