const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');
const sessionController = require('../controllers/sessionController');

router.post('/signup', 
  authController.createUser, 
  (req, res, next) => {
    console.log('here')
    return next()
  }, 
  sessionController.createSession, 
  (req, res) => {
    return res.status(200).send('Success');
})
router.post('/login', authController.verifyUser, sessionController.createSession, (req, res) => {
  return res.status(200).send('Success');
})
router.delete('/login', (req, res) => {
  return res.status(200).json({});
})

module.exports = router