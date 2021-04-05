import { Segment, Container, Grid } from 'semantic-ui-react'

export const Footer = () => {
  return (
    <Segment vertical style={{ padding: '2em 0em' }}>
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={6}>
              <div>
                Created as a personal project by{' '}
                <a
                  href="https://www.aculkin.com"
                  target="_blank"
                  style={{ cursor: 'pointer' }}
                >
                  <b>Andrew Culkin</b>
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
