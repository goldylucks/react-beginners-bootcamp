// @flow

import { createAction } from 'redux-actions'

export const LOGIN = 'auth/LOGIN'
export const login = createAction(LOGIN)

export const SIGNUP = 'auth/SIGNUP'
export const signup = createAction(SIGNUP)
