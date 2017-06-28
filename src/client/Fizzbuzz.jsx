// @flow

import React from 'react'

import App from './App'

class Fizzbuzz extends React.Component {
  state = {
    outputStrings: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '12', '13', '14', 'FizzBuzz'],
  }

  renderOutput() {
    return this.state.outputStrings.map((s, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={idx}>{s}</div>
    ))
  }
  render() {
    return (
      <App
        title="Fizzbuzz"
        controls={
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="starting-number">Starting Number</label>
                  <input id="starting-number" className="form-control" type="number" placeholder="starting number" value={1} max={10} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ending-number">Ending Number</label>
                  <input id="ending-number" className="form-control" type="number" placeholder="ending number" value={15} max={50} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-1">Divisible Number #1</label>
                  <input id="divisible-number-1" className="form-control" type="number" placeholder="divisible number #1" value={3} max={10} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-1">Divisible Word #1</label>
                  <input id="divisible-word-1" className="form-control" placeholder="divisible word #1" value="Fizz" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-2">Divisible Number #2</label>
                  <input id="divisible-number-2" className="form-control" type="number" placeholder="divisible number #2" value={5} max={20} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-2">Divisible Word #2</label>
                  <input id="divisible-word-2" className="form-control" placeholder="divisible word #2" value="Buzz" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button onClick={() => { console.log('fizzbuzz hit me') }} className="btn btn-primary btn-block">Hit me!</button>
              </div>
              <div className="col-md-6">
                <button onClick={() => { console.log('fizzbuzz reset') }} className="btn btn-default btn-block">Reset</button>
              </div>
            </div>
          </div>
        }
        output={
          <div>
            {this.renderOutput()}
          </div>
        }
      />
    )
  }
}

export default Fizzbuzz
