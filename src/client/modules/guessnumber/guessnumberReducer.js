// @flow

import { handleActions } from 'redux-actions'

import { GUESS } from './guessnumberActions'

const randomNumberBetween = (min, max) => Math.floor((Math.random() * (max - min)) + 1) + min

const initialState = {
  guessedNumber: 0,
  targetNumber: randomNumberBetween(1, 100),
}

const guessnumberReducer = handleActions({
  [GUESS](state, action) {
    return {
      ...state,
      guessedNumber: action.payload,
    }
  },
}, initialState)

export default guessnumberReducer
