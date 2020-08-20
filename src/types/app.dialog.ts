export default interface AppDialog {
  isOpen: boolean
  handleClose: () => void
  title: string
  body: any
}
