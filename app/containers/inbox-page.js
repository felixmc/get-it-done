// @flow
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Inbox from '../components/inbox'
import { actions } from '../actions/inbox'

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

function mapStateToProps (state) {
  return { tasks: state.inbox.get('tasks') }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)
