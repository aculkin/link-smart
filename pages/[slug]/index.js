import { useRouter } from 'next/router'

import { Link } from '../../components/page-components/Link'
import { getAccountWithLinks } from '../../next-data-fetching'

export const DynamicLinkPage = ({ account }) => {
  const router = useRouter()
  const passthroughLink = account?.links?.find((link) => link?.passthrough)

  if (passthroughLink?.url && process.browser) {
    router.replace(passthroughLink?.url)
    return <div>Redirecting...</div>
  } else {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Link account={account} />
      </div>
    )
  }
}

export async function getServerSideProps({ params }) {
  const account = await getAccountWithLinks(params.slug)
  if (account) {
    return {
      props: { account },
    }
  } else {
    return {
      notFound: true,
    }
  }
}

export default DynamicLinkPage
