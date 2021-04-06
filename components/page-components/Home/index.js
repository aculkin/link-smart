import { useState } from 'react'
import Link from 'next/link'
import { Container, Header, Grid, Button, Input } from 'semantic-ui-react'

export const Home = () => {
  const [slug, setSlug] = useState('')
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              <Header as="h1" style={{ marginTop: '4em' }}>
                Link Smart
              </Header>
              <p style={{ marginBottom: '4em' }}>
                Next generation one-link tool
              </p>
              <Input
                onChange={(_e, { value }) =>
                  setSlug(value.toLowerCase())
                }
                value={slug}
                fluid
                label="linksmart.app/"
                placeholder="Your name, business, product..."
                action={{
                  href: `/signup?slug=${slug}`,
                  color: 'green',
                  content: 'Signup for free',
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
