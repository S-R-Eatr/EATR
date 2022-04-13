const express = require('express')
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

router.get('/', 
  sessionController.verifySession, 
  userController.getFavorites,
  (req, res) => {
    console.log('verified');
    console.log(res.locals);
    return res.status(200).json(res.locals.favorites);
})
router.put('/', 
  sessionController.verifySession, 
  userController.saveFavorites,
  (req, res) => {
    return res.status(200).send('Successfully saved favorites.')
})

module.exports = router