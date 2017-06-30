// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { isProd } from '../shared/utils'

import flip from './modules/flip'
import guessnumber from './modules/guessnumber'
import auth from './modules/auth'

global.SHOULD_LOG = !isProd

const loggerMiddleware = createLogger({
  predicate: () => global.SHOULD_LOG,
  collapsed: true,
})

const reducers = {
  flip: flip.reducer,
  guessnumber: guessnumber.reducer,
  auth: auth.reducer,
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const initStore = () => createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware, auth.middleware)),
)

export default initStore
