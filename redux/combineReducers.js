import { combineReducers } from 'redux'

import { userReducer } from './user'
import { linksReducer } from './links'
import { accountsReducer } from './accounts'

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  links: linksReducer,
  accounts: accountsReducer,
}

export default combineReducers(reducers)
