import 'rxjs'
import { combineEpics } from 'redux-observable'

import * as inbox from './inbox'

export const epics = combineEpics(
  ...Object.values(inbox.epics),
)

export const actions = {
  ...inbox.actions,
}
