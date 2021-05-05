import { Container } from 'semantic-ui-react'

import { Link } from './Link'

const filterOutNoUrlLinks = (link) => !!link?.url

export const LinkList = ({
  links,
  preview,
  priorityColor,
  linkColor,
  viewId,
}) => {
  return (
    <Container>
      {links.filter(filterOutNoUrlLinks).map((link) => {
        return (
          <Link
            viewId={viewId}
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
