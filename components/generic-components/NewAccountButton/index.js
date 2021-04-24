import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Icon, Input, Grid } from 'semantic-ui-react'

import { createAccountThunk } from '../../../redux/accounts'
import { toast } from '../../../utility/front-end'

const initialAccountDetails = {
  name: '',
  slug: '',
}

export const NewAccountButton = ({ setSelectedAccountId, ...props }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [accountDetails, setAccountDetails] = useState(initialAccountDetails)
  const [modalOpen, setModalOpen] = useState(false)
  const { name, slug } = accountDetails

  const createAccount = () => {
    setLoading(true)
    dispatch(
      createAccountThunk({
        accountDetails,
        afterSuccess: (newAccount) => {
          setLoading(false)
          setModalOpen(false)
          setSelectedAccountId(newAccount?.id)
        },
        afterFailure: () => {
          setLoading(false)
          toast('Something went wrong', 'negative')
        },
      })
    )
  }

  const handleChange = (_e, { name: inputName, value }) => {
    console.log(inputName, value)
    setAccountDetails({ ...accountDetails, [inputName]: value })
  }

  return (
    <>
      <Button
        color="green"
        labelPosition="right"
        icon
        {...props}
        onClick={() => setModalOpen(!modalOpen)}
      >
        New page
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
          <Grid stackable>
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
                  label="linksmart.app/"
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
          <Button loading={loading} primary onClick={createAccount} positive>
            Create Page
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default NewAccountButton
