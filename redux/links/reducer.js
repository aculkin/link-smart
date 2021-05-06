import * as types from './types'
import { LOGOUT } from '../user/types'

const initialLinksState = []

export const linksReducer = (state = initialLinksState, { type, payload }) => {
  switch (type) {
    case LOGOUT:
      return initialLinksState
    case types.GET_LINKS:
      return payload
    case types.CREATE_LINK:
      return [...state, payload]
    case types.EDIT_LINK:
      return state.map((link) =>
        link.id === payload.id ? { ...payload, clicks: link.clicks } : link
      )
    case types.REMOVE_LINK:
      return state.filter((link) => link.id !== payload)
    default:
      return state
  }
}

export default linksReducer
