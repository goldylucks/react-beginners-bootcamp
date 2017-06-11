import React from 'react'

type Props = {
  title: string,
  controls: Object,
  output: ?any,
}

const App = ({ title, controls, output }: Props) => (
  <div className="container app-container">
    <h1>{ title }</h1>
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
)

export default App
