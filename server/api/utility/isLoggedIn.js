const isLoggedIn = (req, res, next) => {
  try {
    if (!!req?.user?.id) {
      next()
    } else {
      res.status(401).send('not logged in')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = isLoggedIn
