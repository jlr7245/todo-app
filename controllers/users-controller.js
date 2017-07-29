const bcrypt = require('bcryptjs');
const User = require('../models/user');

const usersController = {};

usersController.login = (req, res, next) => {
  res.locals.meta = {
    path: 'user/login',
    currentPage: 'login',
  };
  next();
};

usersController.register = (req, res, next) => {
  res.locals.meta = {
    path: 'user/register',
    currentPage: 'register',
  };
  next();
};

module.exports = usersController;
