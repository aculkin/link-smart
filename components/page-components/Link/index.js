import Head from 'next/head'
import { Header, Container, Image, Divider } from 'semantic-ui-react'
import { LinkList } from '../../generic-components/LinkList'

export const Link = ({ account }) => {
  const { name, slug, links, image } = account
  const { altText, url } = image
  console.log(account)
  return (
    <Container text textAlign="center">
      <Head>
        <title>{name}</title>
        <meta name="description" content={'bio about myself'} />
      </Head>
      <Divider hidden />
      <Image centered alt={altText} src={url} size="tiny" circular />
      <Header>
        {name}
        <Header.Subheader>@{slug}</Header.Subheader>
      </Header>
      <LinkList links={links} />
    </Container>
  )
}

export default Link
