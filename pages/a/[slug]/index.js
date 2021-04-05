import { Link } from '../../../components/page-components/Link'
import { getAccountWithLinks } from '../../../next-data-fetching'

export const DynamicLinkPage = ({ account }) => {
  return <Link account={account} />
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
