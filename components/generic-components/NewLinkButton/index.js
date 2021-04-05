import { useDispatch } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'

import { createLinkThunk } from '../../../redux/links'

export const NewLinkButton = ({ accountId, attached = undefined }) => {
  const dispatch = useDispatch()

  const createLink = () => {
    dispatch(createLinkThunk({ accountId }))
  }

  return (
    <Button
      disabled={!accountId}
      color="green"
      attached={attached}
      icon
      onClick={createLink}
    >
      <Icon name="plus" />
      Add a new Link
    </Button>
  )
}

export default NewLinkButton
