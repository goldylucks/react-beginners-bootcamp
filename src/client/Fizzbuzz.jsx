import React from 'react'

class Fizzbuzz extends React.Component {
  state = {
    startingNumber: 1,
    endingNumber: 15,
    divisibleNumber1: 3,
    divisibleWord1: 'Fizz',
    divisibleNumber2: 5,
    divisibleWord2: 'Buzz',
    result: [],
  }

  hitme() {
    console.log('[hitme]')
  }

  reset() {
    console.log('[reset]')
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Fizz buzz</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
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
                <h4><strong>startingNumber</strong>: {this.state.startingNumber}</h4>
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
                <h4><strong>endingNumber</strong>: {this.state.endingNumber}</h4>
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
                <h4><strong>divisibleNumber1</strong>: {this.state.divisibleNumber1}</h4>
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
                <h4><strong>divisibleWord1</strong>: {this.state.divisibleWord1}</h4>
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
                <h4><strong>divisibleNumber2</strong>: {this.state.divisibleNumber2}</h4>
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
                <h4><strong>divisibleWord2</strong>: {this.state.divisibleWord2}</h4>
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
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">
              {this.state.result.map(item => <div>{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fizzbuzz
