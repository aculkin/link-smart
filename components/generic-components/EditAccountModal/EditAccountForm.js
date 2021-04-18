import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Divider } from 'semantic-ui-react'

import { removeAccountThunk, editAccountThunk } from '../../../redux/accounts'
import { toast } from '../../../utility/front-end'

export const EditAccountForm = ({ account, setOpen }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [editedAccount, setEditedAccount] = useState(account)

  const handleChange = (_e, { name, value }) => {
    setEditedAccount({ ...editedAccount, [name]: value })
  }

  const handleSubmit = () => {
    const oldSlug = account.slug
    setLoading(true)
    dispatch(
      editAccountThunk({
        accountId: account?.id,
        accountDetails: editedAccount,
        afterSuccess: (newAccountDetails, successfulEdit) => {
          if (successfulEdit) {
            toast('Success!', 'positive')
          } else {
            toast(
              `Sorry, the url ${editedAccount.slug} is already in use, please choose a different url`
            )
            setEditedAccount({ ...newAccountDetails, slug: oldSlug })
          }
          setLoading(false)
        },
        afterFailure: () => {
          setLoading(false)
          toast('Something went wrong', 'negative')
        },
      })
    )
    console.log('submitting')
  }

  const handleDeleteAccount = () => {
    setDeleteLoading(true)
    dispatch(
      removeAccountThunk({
        accountId: account?.id,
        afterSuccess: () => {
          setDeleteLoading(false)
          setOpen(false)
        },
        afterFailure: () => {
          setDeleteLoading(false)
          toast('Something went wrong', 'negative')
        },
      })
    )
  }

  return (
    <Form>
      <Input
        fluid
        name="slug"
        label="https://linksmart.app/"
        onChange={handleChange}
        value={editedAccount.slug}
      />
      <Divider hidden />
      <Form.Input
        fluid
        name="name"
        label="Account Name"
        onChange={handleChange}
        value={editedAccount.name}
      />
      <Form.Group>
        <Form.Button
          type="button"
          loading={deleteLoading}
          color="red"
          onClick={handleDeleteAccount}
        >
          Delete this account
        </Form.Button>
        <Form.Button
          loading={loading}
          floated="right"
          color="green"
          type="submit"
          onClick={handleSubmit}
        >
          Save Changes
        </Form.Button>
      </Form.Group>
    </Form>
  )
}

export default EditAccountForm
