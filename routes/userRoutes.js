const express = require('express');
const authController = require('../controllers/authController');
const userInfoController = require('../controllers/userInfoController')

const userRouter = express.Router();

userRouter.get('/:id', userInfoController.getOne);
userRouter.post('/registration', authController.signUp);
userRouter.post('/login', authController.login);

module.exports = userRouter;