import axios from 'axios'

import { routes } from './utility'

export const auth = {
  signup: async (userData) => await axios.post(routes.auth.signup, userData),
  login: async (userToLogin) =>
    await axios.post(routes.auth.login, userToLogin),
  logout: async () => await axios.post(routes.auth.logout),
  me: async () => await axios.get(routes.auth.me),
}
