import { CREATE_LINK, EDIT_LINK, REMOVE_LINK, GET_LINKS } from './types'
import { API } from '../../API'

//Link actions
export const getLinks = (linkArray) => ({ type: GET_LINKS, payload: linkArray })
export const createLink = (newLink) => ({ type: CREATE_LINK, payload: newLink })
export const editLink = (editedLink) => ({
  type: EDIT_LINK,
  payload: editedLink,
})
export const removeLink = (linkId) => ({ type: REMOVE_LINK, payload: linkId })

//Link thunks
export const getLinksThunk = (accountId) => async (dispatch) => {
  try {
    const { data: accountLinks } = await API.links.loadAccountLinks(accountId)
    dispatch(getLinks(accountLinks))
  } catch (error) {
    console.log(error)
    return error
  }
}
export const createLinkThunk = (linkDetails) => async (dispatch) => {
  try {
    const { data: newLink } = await API.links.create(linkDetails)
    dispatch(createLink(newLink))
  } catch (error) {
    console.log(error)
    return error
  }
}
export const editLinkThunk = (linkId, linkDetails) => async (dispatch) => {
  try {
    const { data: editedLink } = await API.links.update(linkId, linkDetails)
    dispatch(editLink(editedLink))
  } catch (error) {
    console.log(error)
    return error
  }
}
export const removeLinkThunk = (linkId) => async (dispatch) => {
  try {
    await API.links.delete(linkId)
    dispatch(removeLink(linkId))
  } catch (error) {
    console.log(error)
    return error
  }
}
