const Session = require('../models/sessiondb');
const User = require('../models/userdb');
const { v4: uuidv4 } = require('uuid');

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  try {
    const uuid = uuid4();
    // create session and get _id
    const session = await Session.create({ cookieId: uuid })
    console.log(session)
  
    // insert _id into user.sessionId
    await User.findOneAndUpdate({ username: username }, { sessionId: session._id })
    res.cookie('ssid', uuid, { httpOnly: true, secure: true, maxAge: 300000 }); // localhost could be problem with 'secure'
  } catch (err) {
    return next(err)
  }
  return next();
}

sessionController.verifySession = () => {}
sessionController.deleteSession = () => {}

module.exports = sessionController;