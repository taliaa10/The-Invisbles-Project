const User = require('../models/userModel');

exports.getSignUpForm = (req, res) => {
  res.status(200).render('registration', {
    title: 'Register an account'
  });
};
