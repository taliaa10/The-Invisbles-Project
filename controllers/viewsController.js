const User = require('../models/userModel');

exports.getSignUpForm = (req, res) => {
  res.status(200).render('registration', {
    title: 'Register an account'
  });
};

exports.getLogin = (req, res) => {
  res.status(200).render('login', {
    title: 'Login to your account'
  });
};

exports.getUserInfoForm = (req, res) => {
  res.status(200).render('user-info-form', {
    title: 'User Info Form'
  });
};
