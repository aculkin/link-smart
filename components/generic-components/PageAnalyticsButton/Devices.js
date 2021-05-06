import { Grid, Table, Message } from 'semantic-ui-react'

import { SimpleBarChart } from '../charts'
import { countObjectArrayAttributeValues } from '../../../utility/front-end'

export const Devices = ({ views }) => {
  const deviceGroups = countObjectArrayAttributeValues(views, 'deviceType')
  return (
    <Grid stackable>
      <Grid.Row columns="2">
        <Grid.Column>
          <Message info>
            Which devices are people clicking on your link from
          </Message>
          <Table unstackable definition>
            <Table.Body>
              {deviceGroups.map(({ value, count }) => {
                return (
                  <Table.Row>
                    <Table.Cell>{value}</Table.Cell>
                    <Table.Cell>{count}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column style={{ minHeight: '300px' }}>
          <SimpleBarChart data={deviceGroups} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Devices
