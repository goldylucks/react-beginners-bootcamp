// @flow

import { handleActions } from 'redux-actions'

import { FLIP_GUESS } from './actions'

const initialState = {
  score: 0,
}

const flipReducer = handleActions({
  FLIP_GUESS(state, action) {
    return {
      ...state,
      score
    }
  }
}, initialState)

export default flipReducer
