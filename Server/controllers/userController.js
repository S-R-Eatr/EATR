const User = require('../models/userdb')

const userController = {};

userController.getFavorites = async (req, res, next) => {
  try {
    const user = await User.findById(res.locals.userId);
    res.locals.favorites = user.favorites;
    return next()
  } catch (err) {
    const error = {
      log: 'Express caught error in getFavorites controller.',
      status: 400,
      message: {err: `An error occurred: ${err}`},
    };
    return next(error)
  }
}
// favorites: { }
userController.saveFavorites = async (req, res, next) => {
  try {
    console.log(req.body)
    const { favorites } = req.body;
    console.log(favorites)
    const updatedUser = await User.findByIdAndUpdate(res.locals.userId, { favorites })
    console.log(updatedUser);
    return next()
  } catch (err) {
    const error = {
      log: 'Express caught error in saveFavorites controller.',
      status: 400,
      message: {err: `An error occurred: ${err}`},
    };
    return next(error)
  }
}
  


module.exports = userController;