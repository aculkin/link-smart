export const routes = {
  auth: {
    base: '/auth',
    me: '/auth/me',
    signup: '/auth/signup',
    login: '/auth/login',
    logout: '/auth/logout',
  },
  users: {
    base: '/api/users',
    specific: (id) => `/api/users/${id}`,
  },
  links: {
    base: '/api/links',
    specific: (id) => `/api/links/${id}`,
    loadAccountLinks: (accountId) => `/api/links/account/${accountId}`,
  },
  accounts: {
    base: '/api/accounts',
    specific: (id) => `/api/accounts/${id}`,
    loadMyAccounts: '/api/accounts/my-accounts',
    checkSlug: (slug) => `/api/accounts/check-slug/${slug}`,
  },
  images: {
    base: '/api/images',
    specific: (id) => `/api/images/${id}`,
  },
  clicks: {
    base: '/api/clicks',
    recordClick: (linkId) => `/api/clicks/link/${linkId}`,
  },
  views: {
    base: '/api/views',
    recordView: (accountId) => `/api/views/account/${accountId}`,
  },
}

export default routes
