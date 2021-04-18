import axios from 'axios'

import { routes } from './utility'

export const accounts = {
  loadMyAccounts: async () => await axios.get(routes.accounts.loadMyAccounts),
  create: async (accountInfo) =>
    await axios.post(routes.accounts.base, accountInfo),
  get: async (accountId) =>
    await axios.get(routes.accounts.specific(accountId)),
  update: async (accountId, accountInfo) =>
    await axios.put(routes.accounts.specific(accountId), accountInfo),
  delete: async (accountId) =>
    axios.delete(routes.accounts.specific(accountId)),
  checkSlug: async (slug) => await axios.get(routes.accounts.checkSlug(slug)),
}
