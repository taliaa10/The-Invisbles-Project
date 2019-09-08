const express = require('express');
// const authController = require('../controllers/authController');
const userInfoController = require('../controllers/userInfoController');

const userInfoRouter = express.Router();

userInfoRouter
    .route('/:id')
    .post(userInfoController.createUserInfo);

module.exports = userInfoRouter;