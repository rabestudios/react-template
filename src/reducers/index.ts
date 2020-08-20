import { combineReducers } from 'redux'
import AppState from '../store/types/app.state'

// child reducers
import homeReducer from './home.reducer'
import globalReducer from './global.reducer'

const rootReducer = combineReducers<AppState>({
  global: globalReducer,
  home: homeReducer
})

export default rootReducer
