const User = require('../models/userdb')

const authController = {};

authController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      const err = {
        log: 'Express caught error in createUser controller. Username or password not provided',
        status: 400,
        message: {err: 'Username or password not provided.'},
      };

      return next(err);
    }

    const user = await User.findOne({ username: username })
    if (user) {
      const err = {
        log: 'Express caught error in createUser controller. Username already exists',
        status: 400,
        message: {err: 'Username already exists.'},
      };
      return next(err);
    }

    const newUser = await User.create({ username: username, password: password });
    return next();

  } catch (err) {
    return next(err);
  }
};

authController.verifyUser = (req, res, next) => {

};
