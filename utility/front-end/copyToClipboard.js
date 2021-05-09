import { toast } from './toast'

export const copyToClipboard = (text) => () => {
  navigator.clipboard.writeText(text)
  toast(`Copy successful`, 'positive')
}

export default copyToClipboard
