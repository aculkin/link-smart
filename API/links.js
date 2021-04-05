import axios from 'axios'

import { routes } from './utility'

export const links = {
  loadAccountLinks: async (accountId) =>
    await axios.get(routes.links.loadAccountLinks(accountId)),
  create: async (linkInfo) => await axios.post(routes.links.base, linkInfo),
  get: async (linkId) => await axios.get(routes.links.specific(linkId)),
  update: async (linkId, linkInfo) =>
    await axios.put(routes.links.specific(linkId), linkInfo),
  delete: async (linkId) => axios.delete(routes.links.specific(linkId)),
}
