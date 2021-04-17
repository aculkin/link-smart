import {
  CREATE_ACCOUNT,
  EDIT_ACCOUNT,
  REMOVE_ACCOUNT,
  GET_ACCOUNTS,
} from './types'
import { API } from '../../API'

//account actions
export const getAccounts = (accountsArray) => ({
  type: GET_ACCOUNTS,
  payload: accountsArray,
})
export const createAccount = (newAccount) => ({
  type: CREATE_ACCOUNT,
  payload: newAccount,
})
export const editAccount = (editedAccount) => ({
  type: EDIT_ACCOUNT,
  payload: editedAccount,
})
export const removeAccount = (accountId) => ({
  type: REMOVE_ACCOUNT,
  payload: accountId,
})

//account thunks
export const getAccountsThunk = () => async (dispatch) => {
  try {
    const { data: accountsArray } = await API.accounts.loadMyAccounts()
    dispatch(getAccounts(accountsArray))
  } catch (error) {
    console.log(error)
    return error
  }
}
export const createAccountThunk = ({
  accountDetails,
  afterSuccess,
  afterFailure,
}) => async (dispatch) => {
  try {
    const { data: newAccount } = await API.accounts.create(accountDetails)
    dispatch(createAccount(newAccount))
    afterSuccess && afterSuccess(newAccount)
  } catch (error) {
    console.log(error)
    afterFailure && afterFailure()
    return error
  }
}
export const editAccountThunk = ({
  accountId,
  accountDetails,
  afterSuccess,
  afterFailure,
}) => async (dispatch) => {
  try {
    const { data: editedAccount } = await API.accounts.update(
      accountId,
      accountDetails
    )
    dispatch(editAccount(editedAccount))
    afterSuccess && afterSuccess()
  } catch (error) {
    console.log(error)
    afterFailure && afterFailure()
    return error
  }
}
export const removeAccountThunk = ({
  accountId,
  afterSuccess,
  afterFailure,
}) => async (dispatch) => {
  try {
    await API.accounts.delete(accountId)
    dispatch(removeAccount(accountId))
    afterSuccess && afterSuccess()
  } catch (error) {
    console.log(error)
    afterFailure && afterFailure()
    return error
  }
}
