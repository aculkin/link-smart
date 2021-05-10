const FACEBOOK = 'Facebook'
const INSTAGRAM = 'Instagram'
const LINKEDIN = 'LinkedIn'
const YOUTUBE = 'Youtube'
const TIK_TOK = 'Tik Tok'

const SOCIAL_CLICK_TYPE_CONSTANTS = {
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  YOUTUBE,
  TIK_TOK,
}

const socialClickTypeOptions = [FACEBOOK, INSTAGRAM, LINKEDIN, YOUTUBE, TIK_TOK]

module.exports = {
  socialClickType: {
    options: socialClickTypeOptions,
    constatns: SOCIAL_CLICK_TYPE_CONSTANTS,
  },
}
