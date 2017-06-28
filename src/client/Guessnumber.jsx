// @flow

import React from 'react'

import App from './App'

class Guessnumber extends React.Component {

  state = {
    guessedNumber: 75,
    targetNumber: 75,
  }

  render() {
    return (
      <App
        title="Guessnumber"
        controls={
          <div className="input-group">
            <input className="form-control" type="number" placeholder="Place your guess here" min={1} max={100} />
            <span className="input-group-btn">
              <button className="btn btn-primary">Guess</button>
            </span>
          </div>
        }
        output={
          <div>
            <div style={{ color: 'red' }}>Too low ...</div>
            <div style={{ color: 'red' }}>Too high ...</div>
            <div style={{ color: 'limegreen' }}>Success! The number is { this.state.targetNumber }</div>
          </div>
        }
      />
    )
  }
}

export default Guessnumber
