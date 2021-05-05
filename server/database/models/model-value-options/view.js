const DESKTOP = 'Desktop'
const MOBILE = 'Mobile'
const TABLET = 'Tablet'

const DEVICE_TYPE_CONSTANTS = {
  DESKTOP,
  MOBILE,
  TABLET,
}

const deviceTypeOptions = [DESKTOP, MOBILE, TABLET]

module.exports = {
  deviceType: { options: deviceTypeOptions, constants: DEVICE_TYPE_CONSTANTS },
}
