const formatSUIOptions = (items, displayProperty) => {
  if (items?.length > 0) {
    return items.map((item, index) => {
      const key = item.id || index
      const text = displayProperty
        ? item[displayProperty]
        : item.name || item.id || index
      const value = item.id || index
      return { key, text, value }
    })
  } else {
    return []
  }
}

module.exports = formatSUIOptions
