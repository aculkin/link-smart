import { useSelector } from 'react-redux'
import { Item, Divider, Segment, Header, Icon } from 'semantic-ui-react'

import { DashboardLink } from '../../generic-components/DashboardLink'
import { NewLinkButton } from '../../generic-components/NewLinkButton'

export const Links = ({ selectedAccountId }) => {
  const links = useSelector((state) => state.links)
  return (
    <>
      {links.length > 0 ? (
        <>
          <Item.Group divided>
            {links.map((link, index) => {
              return <DashboardLink key={link?.id || index} link={link} />
            })}
          </Item.Group>
          <Divider />
          <NewLinkButton accountId={selectedAccountId} attached="bottom" />
        </>
      ) : (
        <Segment placeholder>
          <Header icon>
            <Icon name="chain" />
            No links for this account, click the button below to add one!
          </Header>
          <NewLinkButton accountId={selectedAccountId} />
        </Segment>
      )}
    </>
  )
}

export default Links
