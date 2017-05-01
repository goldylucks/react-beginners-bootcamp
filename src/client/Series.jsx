import React from 'react'

const series = ['Southpark', 'Mr. Robot', 'Seinfeld']

const styles = {
  autocomplete: {
    width: '100%',
    border: '1px solid #eee',
    borderRaduis: 4,
  },
  autocompleteRow: {
    padding: 5,
  },
  autocompleteRowHighlighted: {
    background: '#eee',
  },
}

class Series extends React.Component {
  state = {
    query: '',
    selected: [],
  }

  renderAutocompleteResults() {
    const { query } = this.state
    if (!query) {
      return null
    }
    return (
      <div style={styles.autocomplete}>
        {
          series.filter(serie => serie.match(query))
          .map(serie => <div key={serie} style={styles.autocompleteRow}>{serie}</div>)
        }
      </div>
    )
  }

  renderOutput() {
    return this.state.selected.map(serie => <div>{serie}</div>)
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Series</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Search Series"
                value={this.state.query}
                onChange={evt => this.setState({ query: evt.target.value })}
              />
            </div>
            <h4><strong>query</strong>: {this.state.query}</h4>
            {this.renderAutocompleteResults()}
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">{this.renderOutput()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Series
