const sessiondb = require('../models/sessiondb');
const User = require('../models/userdb');
const { v4: uuidv4 } = require('uuid');

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  try {
    const uuid = uuidv4();
    // create session and get _id
    const session = await sessiondb.create({ cookieId: uuid, userId: res.locals.userId })
    
    // insert _id into user.sessionId
    await User.findOneAndUpdate({ username: res.locals.username }, { sessionId: session.id })
    res.cookie('ssid', uuid, { httpOnly: true, secure: true, maxAge: 300000 }); // localhost could be problem with 'secure'
    return next();
  } catch (err) {
    const error = {
      log: 'Express caught error in createSession controller.',
      status: 400,
      message: {err: `An error has occured: ${err}`},
    };
    return next(error)
  }
}

sessionController.verifySession = async (req, res, next) => {
  try {
    const { ssid } = req.cookies;
    const activeSession = await sessiondb.findOne({ cookieId: ssid });
    if (!activeSession) {
      throw new Error('Authentication failed')
    }
    const userId = await User.findById(activeSession.userId);
    res.locals.userId = userId.id;
    return next()
  } catch (err) {
    const error = {
      log: 'Express caught error in verifySession controller.',
      status: 400,
      message: {err: `An error has occured: ${err}`},
    };
    return next(error);
  }
}
sessionController.deleteSession = () => {}

module.exports = sessionController;