import { SET_DEADLINE, SET_TIME_LEFT, HomeAction } from './action.types'

export const setDeadline = (deadline: string): HomeAction => ({
  type: SET_DEADLINE,
  deadline
})

export const setTimeLeft = (timeLeft: string): HomeAction => ({
  type: SET_TIME_LEFT,
  timeLeft
})
