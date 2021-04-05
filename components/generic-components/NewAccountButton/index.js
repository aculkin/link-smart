import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Icon, Input, Grid } from 'semantic-ui-react'

import { createAccountThunk } from '../../../redux/accounts'

const initialAccountDetails = {
  name: '',
  slug: '',
}

export const NewAccountButton = (props) => {
  const dispatch = useDispatch()
  const [accountDetails, setAccountDetails] = useState(initialAccountDetails)
  const [modalOpen, setModalOpen] = useState(false)
  const { name, slug } = accountDetails

  const createAccount = () => {
    dispatch(createAccountThunk(accountDetails))
  }

  const handleChange = (_e, { name: inputName, value }) => {
    console.log(inputName, value)
    setAccountDetails({ ...accountDetails, [inputName]: value })
  }

  return (
    <>
      <Button
        secondary
        labelPosition="right"
        icon
        {...props}
        onClick={() => setModalOpen(!modalOpen)}
      >
        New account
        <Icon name="plus" />
      </Button>
      <Modal
        closeIcon
        onClose={() => setModalOpen(false)}
        onOpen={() => setModalOpen(true)}
        open={modalOpen}
      >
        <Modal.Header>New Account</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row columns="2">
              <Grid.Column>
                <Input
                  fluid
                  placeholder="Account name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  fluid
                  label="www.link.com/"
                  placeholder="Slug"
                  name="slug"
                  onChange={handleChange}
                  value={slug}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={() => setModalOpen(false)}>
            Nevermind
          </Button>
          <Button primary onClick={createAccount} positive>
            Create Page
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default NewAccountButton
