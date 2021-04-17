import * as types from './types'
import { LOGOUT } from '../user/types'

const initialAccountsState = []

export const accountsReducer = (
  state = initialAccountsState,
  { type, payload }
) => {
  switch (type) {
    case LOGOUT:
      return initialAccountsState
    case types.GET_ACCOUNTS:
      return payload
    case types.CREATE_ACCOUNT:
      return [...state, payload]
    case types.EDIT_ACCOUNT:
      return state.map((account) =>
        account.id === payload.id ? payload : account
      )
    case types.REMOVE_ACCOUNT:
      return state.filter((account) => account.id !== payload)
    default:
      return state
  }
}

export default accountsReducer
