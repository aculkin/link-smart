import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  Divider,
  Segment,
  Grid,
  Menu,
  Form,
} from 'semantic-ui-react'

import { Links } from './Links'
import { Appearance } from './Appearance'
import { Settings } from './Settings'
import { Display } from './Display'

import { getLinksThunk } from '../../../redux/links'
import { NewAccountButton } from '../../generic-components/NewAccountButton'
import { PageAnalyticsButton } from '../../generic-components/PageAnalyticsButton'
import { formatSUIOptions } from '../../../utility/front-end'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const [activeMenu, setActiveMenu] = useState('Links')
  const [selectedAccountId, setSelectedAccountId] = useState(0)
  const accounts = useSelector((state) => state.accounts)

  const changeMenu = (menuItem = 'Links') => () => {
    setActiveMenu(menuItem)
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
    <Container style={{ paddingTop: '10px' }}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width="8">
            <Form>
              <Form.Group widths="equal">
                <Form.Dropdown
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
                <NewAccountButton setSelectedAccountId={setSelectedAccountId} />
                <PageAnalyticsButton account={selectedAccount} />
              </Form.Group>
            </Form>

            <Menu attached="top" tabular>
              <Menu.Item
                onClick={changeMenu('Links')}
                active={activeMenu === 'Links'}
              >
                Links
              </Menu.Item>
              <Menu.Item
                onClick={changeMenu('Appearance')}
                active={activeMenu === 'Appearance'}
              >
                Appearance
              </Menu.Item>
              <Menu.Item
                onClick={changeMenu('Settings')}
                active={activeMenu === 'Settings'}
              >
                Settings
              </Menu.Item>
            </Menu>
            <Segment attached="bottom">
              {activeMenu === 'Links' && (
                <Links selectedAccountId={selectedAccountId} />
              )}
              {activeMenu === 'Appearance' && (
                <Appearance selectedAccount={selectedAccount} />
              )}
              {activeMenu === 'Settings' && (
                <Settings selectedAccount={selectedAccount} />
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column width="8">
            <Display selectedAccount={selectedAccount} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Dashboard
