export const countObjectArrayAttributeValues = (
  objectArray,
  attribute,
  unknownString
) => {
  let attributeObject = {}
  objectArray.forEach((element) => {
    const attributeValue = element?.[attribute] || unknownString || 'unknown'
    if (!attributeObject[attributeValue]) {
      attributeObject[attributeValue] = 1
    } else {
      attributeObject[attributeValue] = attributeObject[attributeValue] + 1
    }
  })
  let attributeArray = []
  for (const attribute in attributeObject) {
    attributeArray.push({
      x: attribute,
      y: attributeObject[attribute],
      value: attribute,
      count: attributeObject[attribute],
    })
  }
  return attributeArray.sort(
    ({ value: v1, count: c1 }, { value: v2, count: c2 }) => {
      if (c1 < c2) {
        return 1
      } else if (c1 > c2) {
        return -1
      } else if (v1 === unknownString || v1 === 'unknown') {
        return 1
      } else if (v2 === unknownString || v2 === 'unknown') {
        return -1
      } else {
        return 0
      }
    }
  )
}

export default countObjectArrayAttributeValues
