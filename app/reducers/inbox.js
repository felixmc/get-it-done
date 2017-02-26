// @flow
import { Map, fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux-immutable'

import { actions } from '../actions/inbox'

const { saveTask } = actions

export default combineReducers({
  tasks: handleActions({
    [saveTask.toString()]: (state, action) => {
      return state.insert(0, Map(action.payload))
    },
  }, fromJS([])),
})
