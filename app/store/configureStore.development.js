import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { hashHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'
import { actions, epics } from '../actions'

const epicMiddleware = createEpicMiddleware(epics)

const actionCreators = {
  ...actions,
  push,
}

const logger = createLogger({
  level: 'info',
  collapsed: true,
})

const router = routerMiddleware(hashHistory)

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                         actionCreators,
                       })
                       : compose

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware, router, logger)
)

export default function configureStore (initialState: Object | void) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  )

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }

  return store
}
