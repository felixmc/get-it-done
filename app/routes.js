// @flow
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import InboxPage from './containers/inbox-page'

//     <Route path="/counter" component={CounterPage} />

export default (
  <Route path="/" component={App}>
    <IndexRoute component={InboxPage} />
  </Route>
)
