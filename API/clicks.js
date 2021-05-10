import axios from 'axios'
import { routes } from './utility'

export const clicks = {
  registerClick: async (linkId, clickDetails) =>
    await axios.post(routes.clicks.recordClick(linkId), clickDetails),
  registerSocialClick: async (socialType, clickDetails) =>
    await axios.post(routes.clicks.recordSocialClick(socialType), clickDetails),
}
