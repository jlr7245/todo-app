const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');
const userHelpers = require('../services/user/user-helpers');
const passport = require('../services/user/local');

const render = require('../services/render');

userRouter.get('/', userHelpers.loginRequired, usersController.index, render);

userRouter.get(
  '/login',
  userHelpers.loginRedirect,
  usersController.loginPage,
  render,
);
userRouter.get(
  '/register',
  userHelpers.loginRedirect,
  usersController.registerPage,
  render,
);

userRouter.get('/logout', usersController.logout);

userRouter.post('/register', usersController.register);
userRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/todo',
    failureRedirect: '/user/login',
    failureFlash: true,
  }),
);

module.exports = userRouter;
