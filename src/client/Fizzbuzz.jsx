import React from 'react'

import App from './App'

class Fizzbuzz extends React.Component {
  state = {
    startingNumber: 1,
    startingNumberInput: 1,
    endingNumber: 15,
    endingNumberInput: 15,
    divisibleNumber1: 3,
    divisibleNumber1Input: 3,
    divisibleWord1: 'Fizz',
    divisibleWord1Input: 'Fizz',
    divisibleNumber2: 5,
    divisibleNumber2Input: 5,
    divisibleWord2: 'Buzz',
    divisibleWord2Input: 'Buzz',
    outputStrings: [],
  }

  // eslint-disable-next-line class-methods-use-this
  hitme() {
    console.log('hitme!')
  }

  // eslint-disable-next-line class-methods-use-this
  reset() {
    console.log('reset')
  }

  renderOutput() {
    return this.state.outputStrings.map((str, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={idx}>{str}</div>
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
                  <input
                    id="starting-number"
                    className="form-control"
                    type="number"
                    placeholder="starting number"
                    value={this.state.startingNumber}
                    onChange={evt => this.setState({ startingNumber: evt.target.value })}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ending-number">Ending Number</label>
                  <input
                    id="ending-number"
                    className="form-control"
                    type="number"
                    placeholder="ending number"
                    value={this.state.endingNumberInput}
                    onChange={evt => this.setState({ endingNumberInput: evt.target.value })}
                    max={50}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-1">Divisible Number #1</label>
                  <input
                    id="divisible-number-1"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #1"
                    value={this.state.divisibleNumber1Input}
                    onChange={evt => this.setState({ divisibleNumber1Input: evt.target.value })}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-1">Divisible Word #1</label>
                  <input
                    id="divisible-word-1"
                    className="form-control"
                    placeholder="divisible word #1"
                    value={this.state.divisibleWord1Input}
                    onChange={evt => this.setState({ divisibleWord1Input: evt.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-2">Divisible Number #2</label>
                  <input
                    id="divisible-number-2"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #2"
                    value={this.state.divisibleNumber2Input}
                    onChange={evt => this.setState({ divisibleNumber2Input: evt.target.value })}
                    max={20}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-2">Divisible Word #2</label>
                  <input
                    id="divisible-word-2"
                    className="form-control"
                    placeholder="divisible word #2"
                    value={this.state.divisibleWord2Input}
                    onChange={evt => this.setState({ divisibleWord2Input: evt.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block" onClick={() => this.hitme()}>Hit me!</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
              </div>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Fizzbuzz
