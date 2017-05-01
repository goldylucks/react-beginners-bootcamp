import React from 'react'

const App = ({ appName, controls, output }) =>
  <div className="container app-container">
    <h2>{appName}</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        {controls}
      </div>
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          {output}
        </div>
      </div>
    </div>
  </div>

export default App
