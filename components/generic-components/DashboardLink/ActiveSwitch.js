import { Checkbox } from 'semantic-ui-react'

export const ActiveSwitch = ({ active, toggleAttribute }) => {
  return (
    <Checkbox
      toggle
      label={active ? 'This link is active' : 'This link is inactive'}
      checked={active}
      onChange={toggleAttribute('active', !active)}
    />
  )
}

export default ActiveSwitch
