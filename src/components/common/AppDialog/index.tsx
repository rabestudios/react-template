import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'
import styled from 'styled-components'

const StyledDialogTitle = styled(DialogTitle)`
  width: 300px;
`

interface AppDialogProps {
  title?: string
  body?: any
  isOpen: boolean
  handleClose: () => void
}

const AppDialog: React.FC<AppDialogProps> = (props) => {
  const { isOpen, handleClose, title, body } = props
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <StyledDialogTitle>{title}</StyledDialogTitle>
      {body}
    </Dialog>
  )
}

export default AppDialog
