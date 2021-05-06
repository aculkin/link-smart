import { useState } from 'react'
import {
  Header,
  Icon,
  Label,
  Modal,
  Grid,
  Table,
  Segment,
} from 'semantic-ui-react'

export const LinkAnalyticsLabel = ({ link }) => {
  const [modalOpen, setModalOpen] = useState()
  const toggleOpen = (state) => () => {
    state === true || state === false
      ? setModalOpen(state)
      : setModalOpen(!modalOpen)
  }
  const { clicks, name, url } = link
  return (
    <>
      <Label
        as="a"
        onClick={clicks?.length > 0 ? toggleOpen() : null}
        color={clicks?.length > 0 ? 'blue' : null}
      >
        <Icon name="chart bar" />
        Clicks:<Label.Detail>{clicks?.length || 0}</Label.Detail>
      </Label>
      <Modal
        centered={false}
        closeIcon
        open={modalOpen}
        onOpen={toggleOpen(true)}
        onClose={toggleOpen(false)}
      >
        <Modal.Header>
          Link analytics for {name} ({url})
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row columns="2">
              <Grid.Column>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Clicks</Table.Cell>
                      <Table.Cell>{clicks.length}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <Header icon>
                    <Icon name="chart bar" />
                    Time-based chart of click info coming soon!
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default LinkAnalyticsLabel
