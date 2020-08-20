import { GlobalAction, OPEN_DIALOG, CLOSE_DIALOG } from './action.types'
import AppDialog from 'types/app.dialog'

export const openDialog = (dialog: AppDialog): GlobalAction => ({
  type: OPEN_DIALOG,
  dialog
})

export const closeDialog = (): GlobalAction => ({
  type: CLOSE_DIALOG
})
