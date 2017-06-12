// @flow

import React from 'react'

import App from './App'

const isDivisible = (n, divisbleBy) => n % divisbleBy === 0
const getFizzbuzzStrings = (startingNumber, endingNumber, divisibleWord1,
  divisibleNumber1, divisibleWord2, divisibleNumber2) => {
  const outputStrings = []
  for (let i = startingNumber; i <= endingNumber; i += 1) {
    if (isDivisible(i, divisibleNumber2) &&
    isDivisible(i, divisibleNumber2)) {
      outputStrings.push(divisibleWord1 + divisibleWord2)
    } else if (isDivisible(i, divisibleNumber1)) {
      outputStrings.push(divisibleWord1)
    } else if (isDivisible(i, divisibleNumber2)) {
      outputStrings.push(divisibleWord2)
    } else {
      outputStrings.push(i)
    }
  }
  return outputStrings
}


class Fizzbuzz extends React.Component {
  state = {
    startingNumber: '1',
    endingNumber: '15',
    divisibleNumber1: '3',
    divisibleWord1: 'Fizz',
    divisibleNumber2: '5',
    divisibleWord2: 'Buzz',
    outputStrings: [],
  }

  hitme() {
    const { startingNumber, endingNumber, divisibleWord1,
      divisibleNumber1, divisibleWord2, divisibleNumber2 } = this.state
    const outputStrings = getFizzbuzzStrings(
      Number(startingNumber),
      Number(endingNumber),
      divisibleWord1,
      Number(divisibleNumber1),
      divisibleWord2,
      Number(divisibleNumber2),
    )
    this.setState({ outputStrings })
  }

  reset() {
    this.setState({ outputStrings: [] })
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
                    value={this.state.endingNumber}
                    onChange={evt => this.setState({ endingNumber: evt.target.value })}
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
                    value={this.state.divisibleNumber1}
                    onChange={evt => this.setState({ divisibleNumber1: evt.target.value })}
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
                    value={this.state.divisibleWord1}
                    onChange={evt => this.setState({ divisibleWord1: evt.target.value })}
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
                    value={this.state.divisibleNumber2}
                    onChange={evt => this.setState({ divisibleNumber2: evt.target.value })}
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
                    value={this.state.divisibleWord2}
                    onChange={evt => this.setState({ divisibleWord2: evt.target.value })}
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
