import { Icon } from 'semantic-ui-react'

export const PriorityIcon = ({ toggleAttribute, priority }) => {
  const color = priority ? 'green' : 'grey'
  return (
    <Icon
      link
      size="large"
      name="star"
      color={color}
      onClick={toggleAttribute('priority', !priority)}
    />
  )
}

export default PriorityIcon
