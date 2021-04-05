import { Link } from '../../components/page-components/Link'
import {
  getAccountPaths,
  getAccountWithLinks,
} from '../../next-data-fetching'
const ONE_MINUTE_IN_SECONDS = 60

export const StaticLinkPage = ({ account }) => {
  return <Link account={account} />
}

export const getStaticPaths = async () => {
  try {
    const paths = await getAccountPaths()
    return {
      paths: paths || [],
      fallback: true,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const { slug } = params
    const account = await getAccountWithLinks(slug)
    if (account) {
      return {
        props: { account },
        revalidate: ONE_MINUTE_IN_SECONDS,
      }
    } else {
      return {
        notFound: true,
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default StaticLinkPage