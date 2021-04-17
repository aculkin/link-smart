import { Button } from 'semantic-ui-react'

export const Link = ({ link }) => {
  const { id, name, url, priority } = link
  return (
    <Button
      color={priority ? 'blue' : null}
      href={url}
      fluid
      size="large"
      style={{ margin: '5px' }}
    >
      {name}
    </Button>
  )
}

export default Link
