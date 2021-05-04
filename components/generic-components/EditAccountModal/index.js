import { useState } from 'react'
import { Modal, Button, Header, Icon } from 'semantic-ui-react'

import { EditAccountForm } from './EditAccountForm'

export const EditAccountModal = ({ account }) => {
  const [open, setOpen] = useState(false)
  const setModalState = (state) => () => setOpen(state)
  return (
    <>
      <Button fluid icon labelPosition="right" onClick={setModalState(true)}>
        <Icon name="settings" />
        Page Settings
      </Button>
      <Modal
        closeIcon
        open={open}
        onClose={setModalState(false)}
        onOpen={setModalState(true)}
      >
        <Header content={`Settings for page: ${account?.name}`} />
        <Modal.Content>
          <EditAccountForm account={account} setOpen={setOpen} />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default EditAccountModal
