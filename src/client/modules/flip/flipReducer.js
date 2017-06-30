// @flow

import { handleActions } from 'redux-actions'

import { GUESS, RESET } from './flipActions'

const initialState = {
  score: 0,
}

const flipReducer = handleActions({
  [GUESS](state, action) {
    return {
      ...state,
      score: action.payload,
    }
  },
  [RESET](state) {
    return {
      ...state,
      score: 0,
    }
  },
}, initialState)

export default flipReducer
