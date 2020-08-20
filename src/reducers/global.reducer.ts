import {
  GlobalAction,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from 'actions/global/action.types'
import storeInitialState from 'store/initial.state'
import GlobalState from '../store/types/global.state'
import { Reducer } from 'redux'

const stateKey = 'global'
const initialState = storeInitialState[stateKey]

const globalReducer: Reducer<GlobalState> = (
  state = initialState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case OPEN_DIALOG:
      return { ...state, dialog: action.dialog }
    case CLOSE_DIALOG:
      return { ...state, dialog: undefined }
    default:
      return state
  }
}

export default globalReducer
