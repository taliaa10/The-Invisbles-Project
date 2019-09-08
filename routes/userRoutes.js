const express = require('express');
const authController = require('../controllers/authController');
const userInfoController = require('../controllers/userInfoController');

const userRouter = express.Router();

userRouter.post('/registration', authController.signUp);
userRouter.post('/login', authController.login);
userRouter.post('/user-info', userInfoController.createUserInfo);

module.exports = userRouter;
