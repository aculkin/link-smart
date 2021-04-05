import Head from 'next/head'
import { Header, Container, Image, Divider } from 'semantic-ui-react'
import { LinkList } from '../../generic-components/LinkList'

export const Link = ({ account }) => {
  return (
    <Container text textAlign="center">
      <Head>
        <title>{account?.name}</title>
        <meta name="description" content={'bio about myself'} />
      </Head>
      <Divider hidden />
      <Image
        centered
        alt={account?.image?.altText}
        src={account?.image?.url}
        size="tiny"
        circular
      />
      <Header>
        {account?.name}
        <Header.Subheader>@{account?.slug}</Header.Subheader>
      </Header>
      <LinkList links={account?.links || []} />
    </Container>
  )
}

export default Link
