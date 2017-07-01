// @flow

import { handleActions } from 'redux-actions'

import { LOGIN, SIGNUP, LOGIN_SUCCESS, LOGIN_FAILURE, SYNC_USER_FROM_LS } from './authActions'

const initialState = {
  role: 'guest',
  name: '',
  isProcessing: false,
  error: null,
}

const authReducer = handleActions({
  [SIGNUP](state, action) {
    return {
      ...state,
      role: 'newUser',
      name: action.payload,
    }
  },
  [LOGIN](state) {
    return {
      ...state,
      isProcessing: true,
    }
  },
  [LOGIN_SUCCESS](state, action) {
    return {
      ...state,
      isProcessing: false,
      name: action.payload,
      role: 'user',
    }
  },
  [LOGIN_FAILURE](state, action) {
    return {
      ...state,
      isProcessing: false,
      error: action.payload.message,
    }
  },
  [SYNC_USER_FROM_LS](state, action) {
    return {
      ...state,
      name: action.payload.name,
      role: 'user',
    }
  },

}, initialState)

export default authReducer
