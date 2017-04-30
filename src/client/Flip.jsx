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

const FlipApp = () =>
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
          <span style={styles.score}>Score: <strong>0</strong></span>
          <div style={styles.success}>Heads: you win!</div>
          <div style={styles.failure}>Heads: you lose!</div>
          <div style={styles.success}>Tails: you win!</div>
          <div style={styles.failure}>Tails: you lose!</div>
        </div>
      </div>
    </div>
  </div>

export default FlipApp
