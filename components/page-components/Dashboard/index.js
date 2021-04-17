import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Header,
  Dropdown,
  Container,
  Divider,
  Item,
  Segment,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react'

import { getLinksThunk } from '../../../redux/links'
import { DashboardLink } from '../../generic-components/DashboardLink'
import { NewLinkButton } from '../../generic-components/NewLinkButton'
import { EditAccountModal } from '../../generic-components/EditAccountModal'
import { NewAccountButton } from '../../generic-components/NewAccountButton'
import { formatSUIOptions } from '../../../utility/front-end'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const [selectedAccountId, setSelectedAccountId] = useState(0)
  const accounts = useSelector((state) => state.accounts)
  const links = useSelector((state) => state.links)

  const refreshLinks = () => {
    if (selectedAccountId && selectedAccountId > 0) {
      dispatch(getLinksThunk(selectedAccountId))
    }
  }

  useEffect(() => {
    setSelectedAccountId(accounts?.[0]?.id)
  }, [accounts?.length])

  useEffect(refreshLinks, [selectedAccountId])

  const selectedAccount = accounts?.find(
    (account) => account.id === selectedAccountId
  )

  return (
    <Container>
      <Header textAlign="center" as="h1">
        Dashboard: {selectedAccount?.name}
      </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <NewAccountButton
              fluid
              setSelectedAccountId={setSelectedAccountId}
            />
          </Grid.Column>
          <Grid.Column width="3">
            <Dropdown
              fluid
              value={selectedAccountId}
              onChange={(_e, { value }) => {
                console.log('CHANGING')
                setSelectedAccountId(value)
              }}
              placeholder="Account"
              selection
              options={formatSUIOptions(accounts)}
            />
          </Grid.Column>
          <Grid.Column width="4">
            <EditAccountModal account={selectedAccount} />
          </Grid.Column>
          <Grid.Column width="5">
            <Button
              fluid
              icon
              labelPosition="right"
              href={`/${selectedAccount?.slug}`}
              target="_blank"
            >
              https://www.linksmart.com/{selectedAccount?.slug}{' '}
              <Icon name="external" />
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width="8">
            {links.length > 0 ? (
              <>
                <Segment attached>
                  <Item.Group divided>
                    {links.map((link, index) => {
                      return (
                        <DashboardLink key={link?.id || index} link={link} />
                      )
                    })}
                  </Item.Group>
                </Segment>
                <NewLinkButton
                  accountId={selectedAccountId}
                  attached="bottom"
                />
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
          </Grid.Column>
          <Grid.Column width="8"></Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Dashboard
