import axios from 'axios'

export const fetcher = async (url) => {
  try {
    if (!url.includes('undefined')) return await axios.get(url)
  } catch (error) {
    const returnError = Error('fetcher thrown error')
    if (error.response) {
      returnError.statusCode = error.response.status
      returnError.data = error.response.data
    } else if (error.request) {
      returnError.timeOut = true
    } else {
      console.log('An unexpected error occured')
    }
    throw returnError
  }
}

export default fetcher
