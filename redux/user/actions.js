import { LOGIN, LOGOUT, SIGNUP, ME, EDIT } from './types'
import { toast } from '../../utility/front-end'
import { API } from '../../API'

import { getAccounts } from '../accounts/actions'

//User actions
export const signup = (payload) => ({ type: SIGNUP, payload })
export const login = (payload) => ({ type: LOGIN, payload })
export const logout = () => ({ type: LOGOUT })
export const me = (payload) => ({ type: ME, payload })
export const edit = (payload) => ({ type: EDIT, payload })

//User thunks
export const signupThunk = ({ payload, router, setLoading }) => async (
  dispatch
) => {
  try {
    const {
      data: { user, account },
    } = await API.auth.signup(payload)
    dispatch(signup(user))
    dispatch(getAccounts([account]))
    setLoading(false)
    toast('Your Account was created succssfully!', 'positive')
    router.push('/dashboard')
  } catch (error) {
    setLoading(false)
    toast('Sign up failed. Please try again.', 'negative')
    return error
  }
}
export const loginThunk = ({
  payload: userToLogin,
  router,
  setLoading,
}) => async (dispatch) => {
  try {
    const { data: user } = await API.auth.login(userToLogin)
    dispatch(login(user))
    setLoading(false)
    router.push('/dashboard')
  } catch (error) {
    setLoading(false)
    toast('Wrong email or password, please try again', 'negative')
    return error
  }
}
export const logoutThunk = ({ router, setLoading }) => async (dispatch) => {
  try {
    await API.auth.logout()
    dispatch(logout())
    setLoading(false)
    router.push('/')
  } catch (error) {
    setLoading(false)
    return error
  }
}
export const meThunk = () => async (dispatch) => {
  try {
    const { data: user } = await API.auth.me()
    dispatch(me(user))
    return user
  } catch (error) {
    return error
  }
}
export const editUserThunk = ({ payload: editedUser, setLoading }) => async (
  dispatch
) => {
  try {
    const { data: user } = await API.users.editUser(editedUser)
    dispatch(edit(user))
    setLoading(false)
    toast('User details updated', 'positive')
  } catch (error) {
    setLoading(false)
    toast(error.response.data || 'Something went wrong', 'negative')
  }
}
