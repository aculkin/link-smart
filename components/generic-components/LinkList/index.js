import { Container } from 'semantic-ui-react'

import { Link } from './Link'

const filterOutNoUrlLinks = (link) => !!link?.url

export const LinkList = ({ links, preview, priorityColor, linkColor }) => {
  return (
    <Container>
      {links.filter(filterOutNoUrlLinks).map((link) => {
        return (
          <Link
            key={link.name}
            link={link}
            preview={preview}
            priorityColor={priorityColor || 'blue'}
            linkColor={linkColor || 'grey'}
          />
        )
      })}
    </Container>
  )
}

export default LinkList
