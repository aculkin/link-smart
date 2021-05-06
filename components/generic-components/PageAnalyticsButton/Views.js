import { Grid, Table, Message, Segment, Header, Icon } from 'semantic-ui-react'

import { calculateClickThroughRate } from '../../../utility/front-end'

export const Views = ({ views }) => {
  const CTR = calculateClickThroughRate(views)
  return (
    <Grid stackable>
      <Grid.Row columns="2">
        <Grid.Column>
          <Message info>Basic page view information</Message>
          <Table unstackable definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Page Views</Table.Cell>
                <Table.Cell>{views.length}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Clickthrough rate</Table.Cell>
                <Table.Cell>{(CTR * 100).toFixed(1)} %</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <Segment placeholder>
            <Header icon>
              <Icon name="chart bar" />
              Time-based chart of pageviews coming soon!
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Views
