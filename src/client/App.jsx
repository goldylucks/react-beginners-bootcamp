import React from 'react'

const App = ({ title, controls, output }) =>
  <div className="container app-container">
    <h2>{ title }</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        <div className="row">
          {controls}
        </div>
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
