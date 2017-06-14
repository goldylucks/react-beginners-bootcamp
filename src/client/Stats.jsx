// @flow

import React from 'react'

const styles = {
  success: { color: 'limegreen' },
  failure: { color: 'red' },
}

type Props = {
  flipScore: number,
  guessedNumber: number,
  targetNumber: number,
  fizzbuzzStrings: Array<string>,
}

const Stats = ({ flipScore, guessedNumber, targetNumber, fizzbuzzStrings }: Props) => (
  <div className="container">
    <div className="app-container">
      <h3>Flip</h3>
      <strong>Score:</strong> {flipScore}
    </div>
    <div className="app-container">
      <h3>Guess</h3>
      <strong>you guessed</strong> {guessedNumber}
      {targetNumber > guessedNumber && <div style={styles.failure}>Too low ...</div>}
      {targetNumber < guessedNumber && <div style={styles.failure}>Too High ...</div>}
      {targetNumber === guessedNumber && <div style={styles.success}>
        Success! The number is {targetNumber}</div>}
    </div>
    <div className="app-container">
      <h3>Fizzbuzz</h3>
      <strong>output:</strong> {fizzbuzzStrings}
    </div>
  </div>
)

export default Stats
