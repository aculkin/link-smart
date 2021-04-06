import { Message, Header, Container, Divider } from 'semantic-ui-react'

export const About = () => {
  return (
    <Container text>
      <Divider hidden />
      <Header textAlign="center">About</Header>
      <Message>
        <p>
          Linksmart is a personal project of mine to help users overcome the "1
          link restriction" in some social media sites. The goal of Linksmart is
          to offer in depth link analytics adn customization all for free!
        </p>
      </Message>
    </Container>
  )
}

export default About
