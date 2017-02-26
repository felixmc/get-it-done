// @flow
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers'
import { epics } from '../actions'

const epicMiddleware = createEpicMiddleware(epicss)

const router = routerMiddleware(hashHistory)

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware, router)
)

export default function configureStore (initialState: Object | void) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  )
}
