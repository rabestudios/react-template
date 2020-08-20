import { types, HomeAction} from './types'

export const setDeadline = (deadline: string): HomeAction => ({
  type: types.SET_DEADLINE,
  deadline
})

export const setTimeLeft = (timeLeft: number) => ({
  type: types.SET_TIME_LEFT,
  timeLeft
})
