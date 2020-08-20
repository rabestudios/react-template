import { Action } from 'redux'
import AppDialog from 'types/app.dialog'

export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export interface GlobalAction extends Action {
  dialog?: AppDialog
}
