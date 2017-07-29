const bcrypt = require('bcryptjs');
const User = require('../models/user');

const catchErr = require('../services/catch');

const usersController = {};

usersController.index = (req, res, next) => {
  // this is temporary
  return res.json({
    user: req.user,
    data: 'User profile goes here',
  })
}

usersController.loginPage = (req, res, next) => {
  res.locals.meta = {
    path: 'user/login',
    currentPage: 'login',
  };
  next();
};

usersController.registerPage = (req, res, next) => {
  res.locals.meta = {
    path: 'user/register',
    currentPage: 'register',
  };
  next();
};

usersController.register = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    first_name: req.body.firstname,
    last_name: req.body.lastname,
  })
    .then(user => {
      req.login(user, err => {
        if (err) return next(err);
        res.redirect('/user');
      });
    })
    .catch(catchErr);
};

usersController.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

module.exports = usersController;
