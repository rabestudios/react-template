import types from './types'

type HomeAction =
  | { type: typeof types.SET_DEADLINE; deadline: string }
  | { type: typeof types.SET_TIME_LEFT; timeLeft: number }
  | { type: typeof types.DECREASE_TIME }

export const setDeadline = (deadline: string): HomeAction => ({
  type: types.SET_DEADLINE,
  deadline
})

export const decreaseTime = (): HomeAction => ({
  type: types.DECREASE_TIME
})

export const setTimeLeft = (timeLeft: number) => ({
  type: types.SET_TIME_LEFT,
  timeLeft
})
