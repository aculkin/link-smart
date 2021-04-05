const { User } = require('../../database/models')

const signup = async (req, res, next) => {
  try {
    const { email, firstName, lastName, password } = req.body
    console.log(req.body)
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    })
    req.login(user, (error) => {
      error ? next(error) : res.json(user)
    })
  } catch (error) {
    next(error)
  }
}

module.exports = signup
