import { Icon } from 'semantic-ui-react'

export const PassthroughIcon = ({ toggleAttribute, passthrough }) => {
  const color = passthrough ? 'green' : 'grey'
  return (
    <Icon
      color={color}
      link
      size="large"
      name="exchange"
      onClick={toggleAttribute('passthrough', !passthrough)}
    />
  )
}

export default PassthroughIcon
