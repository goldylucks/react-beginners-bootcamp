// @flow

import { handleActions } from 'redux-actions'

import { LOGIN, SIGNUP } from './authActions'

const initialState = {
  role: 'guest',
  name: '',
}

const authReducer = handleActions({
  [SIGNUP](state, action) {
    return {
      ...state,
      role: 'newUser',
      name: action.payload,
    }
  },
  [LOGIN](state, action) {
    return {
      ...state,
      role: 'user',
      name: action.payload,
    }
  },
}, initialState)

export default authReducer
