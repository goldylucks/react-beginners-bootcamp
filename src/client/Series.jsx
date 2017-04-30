import React from 'react'

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

const Series = () =>
  <div className="container app-container">
    <h2>Series</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Controls</h3>
        <div className="form-group">
          <input className="form-control" placeholder="Search Series" />
        </div>
        <div className="form-group">
          <input className="form-control" placeholder="Search Series" />
        </div>
        <div style={styles.autocomplete}>
          <div style={styles.autocompleteRow}>Suthpark</div>
          <div
            style={Object.assign({}, styles.autocompleteRow, styles.autocompleteRowHighlighted)}
          >Mr. Robot</div>
        </div>
      </div>
      <div className="col-md-2 col-md-offset-2">
        <h3>Output</h3>
        <div className="well">
          <div>Southpark</div>
          <div>Mr. robot</div>
          <div>Seinfeld</div>
        </div>
      </div>
    </div>
  </div>

export default Series
