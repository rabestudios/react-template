import moment from 'moment'
import HomeState from 'store/types/home.state'
import AppState from './types/app.state'

const home: HomeState = {
  deadline: moment('2020-08-18').startOf('day').toISOString(),
  timeLeft: ''
}

const initialState: AppState = {
  global: {},
  home
}

export default initialState
