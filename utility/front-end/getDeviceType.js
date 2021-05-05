const uaTabletRegex = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i
const uaMobileRegex = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/

export const getDeviceType = (navigator) => {
  const ua = navigator?.userAgent

  if (ua && uaTabletRegex.test(ua)) {
    return 'Tablet'
  }
  if (ua && uaMobileRegex.test(ua)) {
    return 'Mobile'
  }
  return 'Desktop'
}

export default getDeviceType
