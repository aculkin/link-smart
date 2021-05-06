export const format = {
  slug: (v) => {
    return v?.replace(/\s+|[.,\/\\]/g, '')?.toLowerCase() || ''
  },
  noSpaces: (v) => {
    return v?.replace(/\s+/g, '') || ''
  },
  lowerCase: (v) => v?.toLowerCase() || '',
}

export default format
