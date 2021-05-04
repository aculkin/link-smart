import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'semantic-ui-react'

import { BackgroundColorPicker } from '../BackgroundColorPicker'
import { editAccountThunk } from '../../../redux/accounts'

const colorOptions = [
  {
    key: 'red',
    text: 'Red',
    value: 'red',
  },
  {
    key: 'orange',
    text: 'Orange',
    value: 'orange',
  },
  {
    key: 'yellow',
    text: 'Yellow',
    value: 'yellow',
  },
  {
    key: 'green',
    text: 'Green',
    value: 'green',
  },
  {
    key: 'blue',
    text: 'Blue',
    value: 'blue',
  },
  {
    key: 'olive',
    text: 'Olive',
    value: 'olive',
  },
  {
    key: 'teal',
    text: 'Teal',
    value: 'teal',
  },
  {
    key: 'violet',
    text: 'Violet',
    value: 'violet',
  },
  {
    key: 'purple',
    text: 'Purple',
    value: 'purple',
  },
  {
    key: 'pink',
    text: 'Pink',
    value: 'pink',
  },
  {
    key: 'brown',
    text: 'Brown',
    value: 'brown',
  },
  {
    key: 'grey',
    text: 'Grey',
    value: 'grey',
  },
  {
    key: 'black',
    text: 'Black',
    value: 'black',
  },
]

export const ColorSelector = ({ account }) => {
  const dispatch = useDispatch()
  const [colors, setColors] = useState({
    backgroundColor: account?.backgroundColor,
    linkColor: account?.linkColor,
    priorityColor: account?.priorityColor,
  })

  const handleChange = (_e, { name, value }) => {
    dispatch(
      editAccountThunk({
        accountId: account?.id,
        accountDetails: { ...account, [name]: value },
      })
    )
    setColors({ ...colors, [name]: value })
  }

  useEffect(() => {
    setColors({
      backgroundColor: account?.backgroundColor,
      linkColor: account?.linkColor,
      priorityColor: account?.priorityColor,
    })
  }, [account])

  return (
    <>
      <Form>
        <Form.Dropdown
          selection
          fluid
          placeholder="Set Regular Link Color"
          onChange={handleChange}
          name="linkColor"
          label="Link Color"
          options={colorOptions}
          value={account?.linkColor}
        />
        <Form.Dropdown
          selection
          fluid
          placeholder="Set Priority Link Color"
          onChange={handleChange}
          name="priorityColor"
          label="Priority Link Color"
          options={colorOptions}
          value={account?.priorityColor}
        />
        <BackgroundColorPicker account={account} />
      </Form>
    </>
  )
}

export default ColorSelector
