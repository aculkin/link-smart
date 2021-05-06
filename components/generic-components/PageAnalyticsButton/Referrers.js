import { Grid, Table, Message } from 'semantic-ui-react'

import { SimpleBarChart } from '../charts'
import { countObjectArrayAttributeValues } from '../../../utility/front-end'

export const Referrers = ({ views }) => {
  const referrers = countObjectArrayAttributeValues(views, 'referrer', 'direct')
  return (
    <Grid stackable>
      <Grid.Row columns="2">
        <Grid.Column>
          <Message info>
            What websites are people on before they come to your page?
          </Message>
          <Table unstackable definition>
            <Table.Body>
              {referrers.map(({ value, count }) => {
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
          <SimpleBarChart data={referrers} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Referrers
