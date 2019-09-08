const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/registration', viewsController.getSignUpForm);
router.get('/login', viewsController.getLogin);
router.get('/user-info-form', viewsController.getUserInfoForm);

module.exports = router;
