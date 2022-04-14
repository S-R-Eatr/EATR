const sessiondb = require('../models/sessiondb');
const User = require('../models/userdb');
const { v4: uuidv4 } = require('uuid');

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  try {
    const uuid = uuidv4();
    // create session and get _id
    const session = await sessiondb.create({ cookieId: uuid, userId: res.locals.userId })
    // const session = await sessiondb.findOneAndUpdate({ cookieId: uuid, userId: res.locals.userId }, {upsert: true})

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
    console.log('SSID Cookie in verifySession: ', ssid)
    const activeSession = await sessiondb.findOne({ cookieId: ssid });
    console.log('activeSession in verifySession: ', activeSession)
    if (!activeSession) {
      throw new Error('Authentication failed')
    }
    const userId = await User.findById(activeSession.userId);
    console.log('userId in verifySession: ', userId)
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