import * as types from './types'

const initialUserState = null

export const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP:
    case types.LOGIN:
    case types.ME:
    case types.EDIT:
      return payload
    case types.LOGOUT:
      return initialUserState
    default:
      return state
  }
}
