const User = require('../models/userdb')

const authController = {};

authController.createUser = async (req, res, next) => {
  try {
    console.log(req.body)
    const { username, password } = req.body;
    res.locals.username = username;
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

    await User.create({ username: username, password: password });
    console.log('User created')
    return next();

  } catch (err) {
    const error = {
      log: 'Express caught error in createUser controller.',
      status: 400,
      message: {err: `An error has occured: ${err}`},
    };
    return next(error);
  }
};

authController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  res.locals.username = username;
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
    const error = {
      log: 'Express caught error in verifyUser controller.',
      status: 400,
      message: {err: `An error has occured: ${err}`},
    };
    return next(error);
  }
};

module.exports = authController;