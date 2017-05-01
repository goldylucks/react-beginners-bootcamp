import React from 'react'

const randomNum = () => Math.floor(Math.random() * 100) + 1

const styles = {
  success: {
    color: 'limegreen',
  },

  failure: {
    color: 'red',
  },
}

class Guessnumber extends React.Component {

  state = {
    number: randomNum(),
    guessed: null,
    guessInput: '',
  }

  renderOutput() {
    if (!this.state.guessed) {
      return null
    }
    if (this.state.guessed === this.state.guessInput) {
      return <div style={styles.success}>[{this.state.guessed}]: Bullseye!</div>
    }
    return <div style={styles.failure}>[{this.state.guessed}]: Too {this.state.guessed > this.state.number ? 'High' : 'Low'}...</div>
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Guess Number</h2>
        <p className="lead">Guess a number between 1-100</p>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="input-group">
              <input className="form-control" type="number" placeholder="Place your guess here" min={1} max={100} />
              <span className="input-group-btn">
                <button className="btn btn-primary">Guess</button>
              </span>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">{this.renderOutput()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Guessnumber
