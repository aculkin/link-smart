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
import { IphoneContainer } from '../../generic-components/IphoneContainer'
import { ColorSelector } from '../../generic-components/ColorSelector'
import { Link } from '../../page-components/Link'
import { formatSUIOptions, toast } from '../../../utility/front-end'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const [selectedAccountId, setSelectedAccountId] = useState(0)
  const accounts = useSelector((state) => state.accounts)
  const links = useSelector((state) => state.links)

  const copyToClipboard = (text) => () => {
    navigator.clipboard.writeText(text)
    toast(`Your link has been copied to your clipboard`, 'positive')
  }

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
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width="3">
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
          <Grid.Column width="6">
            <Button.Group fluid>
              <Button
                icon
                labelPosition="left"
                primary
                onClick={copyToClipboard(
                  `linksmart.com/${selectedAccount?.slug}`
                )}
              >
                Copy link <Icon name="copy" />
              </Button>
              <Button
                icon
                labelPosition="right"
                href={`/${selectedAccount?.slug}`}
                target="_blank"
              >
                linksmart.app/{selectedAccount?.slug} <Icon name="external" />
              </Button>
            </Button.Group>
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
          <Grid.Column width="4">
            <Segment>
              <ColorSelector account={selectedAccount} />
            </Segment>
          </Grid.Column>
          <Grid.Column width="4">
            <IphoneContainer>
              <Link
                account={{
                  ...selectedAccount,
                  links: links.filter((link) => link?.active && link?.url),
                }}
                preview={true}
              />
            </IphoneContainer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Dashboard
