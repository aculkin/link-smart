import axios from 'axios'

import { routes } from './utility'

export const views = {
  recordView: async (accountId, viewDetails) =>
    await axios.post(routes.views.recordView(accountId), viewDetails),
}
