import axios from 'axios'

import { routes } from './utility'

export const users = {
  editUser: async (editedUser) =>
    await axios.put(routes.users.s, editedUser),
}
