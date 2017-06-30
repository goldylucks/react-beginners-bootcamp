// @flow

import { handleActions } from 'redux-actions'

import { GUESS } from './flipActions'

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
}, initialState)

export default flipReducer
