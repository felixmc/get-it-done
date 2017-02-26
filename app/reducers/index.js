// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import inbox from './inbox'

export default combineReducers({
  inbox,
  routing,
})
