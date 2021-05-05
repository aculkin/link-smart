export const getReferrer = (document) => {
  if (document?.referrer === '') {
    return null
  } else {
    return document?.referrer || null
  }
}

export default getReferrer
