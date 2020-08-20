import React, { useCallback } from 'react'
import Router from 'components/common/Router'
import { default as AppDialogIfc } from '../types/app.dialog'
import * as globalActions from 'actions/global'
import AppDialog from 'components/common/AppDialog'

export interface AppProps {
  dialog?: AppDialogIfc
  actions: typeof globalActions
}

const App: React.FC<AppProps> = (props) => {
  const { dialog, actions } = props

  const handleClose = useCallback(() => {
    actions.closeDialog()
  }, [actions])

  return (
    <div>
      <Router />
      <AppDialog
        isOpen={dialog !== undefined}
        title={dialog && dialog.title}
        body={dialog && dialog.body}
        handleClose={handleClose}
      />
    </div>
  )
}

export default App
