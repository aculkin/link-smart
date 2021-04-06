import Head from 'next/head'

import { NavbarLayout } from '../layouts'
import { Home } from '../components/page-components/Home'

export default function HomePage() {
  return (
    <NavbarLayout>
      <Head>
        <title>Link Smart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </NavbarLayout>
  )
}
