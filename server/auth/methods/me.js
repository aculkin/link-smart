const me = async (req, res, next) => {
  try {
    res.status(200).json(req?.user || null)
  } catch (error) {
    next(error)
  }
}

module.exports = me
