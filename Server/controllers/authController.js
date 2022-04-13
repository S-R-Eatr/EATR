const User = require('../models/userdb')

const authController = {};

authController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username)
    console.log(password)
    if (!username || !password) {
      const err = {
        log: 'Express caught error in createUser controller. Username or password not provided',
        status: 400,
        message: {err: 'Username or password not provided.'},
      };

      return next(err);
    }

    const user = await User.findOne({ username: username })
    console.log(user);
    if (user) {
      const err = {
        log: 'Express caught error in createUser controller. Username already exists',
        status: 400,
        message: {err: 'Username already exists.'},
      };
      return next(err);
    }

    await User.create({ username: username, password: password });
    console.log('User created')
    return next();

  } catch (err) {
    return next(err);
  }
};

authController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      const err = {
        log: 'Express caught error in verifyUser controller. Username or password not provided',
        status: 400,
        message: {err: 'Username or password not provided.'},
      };
      throw new Error(err)
    }
  
    const user = await User.findOne({ username: username })
    const err = {
      log: 'Express caught error in verifyUser controller. Username or password incorrect',
      status: 400,
      message: {err: 'Username or password incorrect.'},
    };
    if (!user) {
      throw new Error(err)
    }
    
    const isValidated = await User.validatePassword(password)
    if (isValidated) {
      return next()
    } else {
      throw new Error(err)
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;