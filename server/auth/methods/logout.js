const logout = async (req, res, next) => {
  try {
    req.logout()
    req.session.destroy()
    res.redirect('/')
  } catch (error) {
    next(error)
  }
}

module.exports = logout
