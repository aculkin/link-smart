import Toastify from 'toastify-js'

export const toast = (text, type = 'info', duration = 3000) => {
  let backgroundColor
  switch (type) {
    case 'positive':
      backgroundColor = '#2bb827'
      break
    case 'negative':
      backgroundColor = '#d9001d'
      break
    case 'info':
      backgroundColor = '#117ad6'
      break
    default:
      backgroundColor = '#8a8a8a'
  }
  Toastify({
    text,
    backgroundColor,
    duration,
    close: true,
    stopOnFocus: true,
    gravity: 'top',
    position: 'right',
  }).showToast()
}

export default toast
