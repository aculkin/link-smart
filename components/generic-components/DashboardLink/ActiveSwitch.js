import { Checkbox } from 'semantic-ui-react'

export const ActiveSwitch = ({ active, toggleAttribute }) => {
  return (
    <Checkbox
      toggle
      checked={active}
      onChange={toggleAttribute('active', !active)}
    />
  )
}

export default ActiveSwitch
