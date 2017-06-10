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

const Flip = () => (
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
        <span style={{ color: 'green' }}>Score: <strong>0</strong></span>
        <div style={styles.success}>Heads: you win!</div>
        <div style={styles.fialure}>Heads: you lose!</div>
        <div style={styles.success}>Tails: you win!</div>
        <div style={styles.fialure}>Tails: you lose!</div>
      </div>
    }
  />
)

export default Flip
