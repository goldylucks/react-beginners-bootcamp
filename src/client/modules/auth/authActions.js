// @flow

import { createAction } from 'redux-actions'

export const LOGIN = 'auth/LOGIN'
export const loginRequest = createAction(LOGIN)

export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
export const loginFailure = createAction(LOGIN_FAILURE)

export const login = (name: string) => (dispatch: Function) => {
  dispatch(loginRequest())
  setTimeout(() => {
    Math.random() > 0.5 // eslint-disable-line no-unused-expressions
      ? dispatch(loginSuccess(name))
      : dispatch(loginFailure({ message: 'wrong password' }))
  }, 1000)
}

export const SIGNUP = 'auth/SIGNUP'
export const signup = createAction(SIGNUP)

export const SYNC_USER_FROM_LS = 'auth/SYNC_USER_FROM_LS'
export const syncUserFromLs = createAction(SYNC_USER_FROM_LS)
