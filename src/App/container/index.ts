import { bindActionCreators, AnyAction } from 'redux'
import { connect } from 'react-redux'
import * as globalActions from 'actions/global'
import AppState from 'store/types/app.state'
import { ThunkDispatch } from 'redux-thunk'
import App from '../index'

function mapStateToProps(state: AppState) {
  const { global } = state
  return {
    title: 'something',
    dialog: global.dialog
  }
}

function mapStateToDispatch(dispatch: ThunkDispatch<AppState, undefined, AnyAction>) {
  return {
    actions: bindActionCreators(globalActions, dispatch)
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App)
