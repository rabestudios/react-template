import HomeState from './home.state'
import GlobalState from './global.state'

export default interface AppState {
  global: GlobalState
  home: HomeState
}
