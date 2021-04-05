const { User } = require('../../database/models')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findByEmail(email)
    if (user?.correctPassword(password)) {
      req.login(user, (error) =>
        error ? next(error) : res.status(200).json(user)
      )
    } else {
      res.status(401).send('Wrong email and/or password')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = login
