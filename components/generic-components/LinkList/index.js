import { Container } from 'semantic-ui-react'
import { Link } from './Link'

export const LinkList = ({ links }) => {
  return (
    <Container>
      {links.map((link) => {
        return <Link key={link.name} link={link} />
      })}
    </Container>
  )
}

export default LinkList