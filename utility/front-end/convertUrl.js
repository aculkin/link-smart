export const convertUrl = (uneditedUrl) => {
  const url = uneditedUrl.toLowerCase()
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  } else {
    return `https://${url}`
  }
}

export default convertUrl
