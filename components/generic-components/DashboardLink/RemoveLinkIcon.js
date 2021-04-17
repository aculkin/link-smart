import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Confirm, Popup } from 'semantic-ui-react'

import { removeLinkThunk } from '../../../redux/links'

export const RemoveLinkIcon = ({ linkId }) => {
  const dispatch = useDispatch()
  const [confirmOpen, setConfirmOpen] = useState(false)

  const toggleConfirm = (state) => {
    setConfirmOpen(state ? state : !confirmOpen)
  }

  const removeLink = () => {
    setConfirmOpen(false)
    dispatch(removeLinkThunk(linkId))
  }

  return (
    <>
      <Popup
        position="top center"
        content="Delete this link"
        trigger={
          <Icon
            link
            size="large"
            name="trash"
            onClick={toggleConfirm}
            disabled={!linkId}
          />
        }
      />
      {linkId && (
        <Confirm
          open={confirmOpen}
          onCancel={() => toggleConfirm(false)}
          onConfirm={removeLink}
        />
      )}
    </>
  )
}

export default RemoveLinkIcon
