export const types = {
  SET_DEADLINE: 'SET_DEADLINE',
  SET_TIME_LEFT: 'SET_TIME_LEFT'
}

export interface HomeAction {
  type: string
  deadline?: string
  timeLeft?: string
}
