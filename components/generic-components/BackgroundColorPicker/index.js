import React, { useState } from 'react'
import { TwitterPicker } from 'react-color'
import { useDispatch } from 'react-redux'
import { Popup, Button } from 'semantic-ui-react'

import { editAccountThunk } from '../../../redux/accounts'

export const BackgroundColorPicker = ({ account }) => {
  const [popupOpen, setPopupOpen] = useState(false)
  const dispatch = useDispatch()
  const backgroundColor = account?.backgroundColor

  const onColorChange = (color) => {
    dispatch(
      editAccountThunk({
        accountId: account?.id,
        accountDetails: { ...account, backgroundColor: color?.hex || null },
      })
    )
  }

  const togglePopup = (state) => () => {
    if (state === true) {
      setPopupOpen(true)
    } else if (state === false) {
      setPopupOpen(false)
    } else {
      setPopupOpen(!popupOpen)
    }
  }

  return (
    <Popup
      onOpen={togglePopup(true)}
      onClose={togglePopup(false)}
      on="click"
      open={popupOpen}
      pinned
      trigger={<Button fluid>Change Background Color</Button>}
    >
      <TwitterPicker
        triangle="hide"
        color={backgroundColor || '#FFFFFF'}
        onChangeComplete={onColorChange}
      />
    </Popup>
  )
}
