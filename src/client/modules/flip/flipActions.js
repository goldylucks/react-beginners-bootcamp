// @flow

import { createAction } from 'redux-actions'

export const GUESS = 'flip/GUESS'
export const guess = createAction(GUESS)

export const RESET = 'flip/RESET'
export const reset = createAction(RESET)
