import React from 'react'

import App from './App'

const Flip = () =>
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
    output={
      <div>
        <span style={{ color: 'green' }}>Score: <strong>0</strong></span>
        <div style={{ color: 'limegreen' }}>Heads: you win!</div>
        <div style={{ color: 'red' }}>Heads: you lose!</div>
        <div style={{ color: 'limegreen' }}>Tails: you win!</div>
        <div style={{ color: 'red' }}>Tails: you lose!</div>
      </div>
    }
  />

export default Flip
