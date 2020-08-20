import { Action } from 'redux'

export const SET_DEADLINE = 'SET_DEADLINE'
export const SET_TIME_LEFT = 'SET_TIME_LEFT'

export interface HomeAction extends Action {
  deadline?: string
  timeLeft?: string
}
