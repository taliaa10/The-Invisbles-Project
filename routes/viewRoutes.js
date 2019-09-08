const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/registration', viewsController.getSignUpForm);

module.exports = router;
