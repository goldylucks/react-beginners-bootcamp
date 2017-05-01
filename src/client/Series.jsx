// @flow

import React from 'react'

import App from './App'

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
      <App
        appName="Series (using App)"
        controls={
          <div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Search Series"
                value={this.state.query}
                onChange={evt => this.setState({ query: evt.target.value })}
              />
            </div>
            {this.renderAutocompleteResults()}
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Series
