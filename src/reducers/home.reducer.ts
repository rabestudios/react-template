import { HomeAction, types } from 'actions/home/types'
import storeInitialState from 'store/initial.state'
import HomeState from '../store/types/home.state'
import { Reducer } from 'redux'

const stateKey = 'home'
const initialState = storeInitialState[stateKey]

const homeReducer: Reducer<HomeState> = (
  state = initialState,
  action: HomeAction
): HomeState => {
  switch (action.type) {
    case types.SET_DEADLINE:
      return { ...state, deadline: action.deadline }
    case types.SET_TIME_LEFT:
      return { ...state, timeLeft: action.timeLeft }
    default:
      return state
  }
}

export default homeReducer
