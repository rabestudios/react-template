import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import AppState from './types/app.state'

export default function configureStore(
  initialState: AppState
): Store<AppState> {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
