import { combineReducers } from 'redux'
import AppState from '../store/types/app.state'

// child reducers
import homeReducer from './home.reducer'

const rootReducer = combineReducers<AppState>({
  home: homeReducer
})

export default rootReducer
