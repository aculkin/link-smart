import axios from 'axios'

import { routes } from './utility'

export const images = {
  create: async (imageInfo) => await axios.post(routes.images.base, imageInfo),
  get: async (imageId) => await axios.get(routes.images.specific(imageId)),
  update: async (imageId, imageInfo) =>
    await axios.put(routes.images.specific(imageId), imageInfo),
  delete: async (imageId) => axios.delete(routes.images.specific(imageId)),
}
