const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');
const userHelpers = require('../services/user/user-helpers');

const render = require('../services/render');

userRouter.get('/login', usersController.login, render);
userRouter.get('/register', usersController.register, render);

authRouter.post('/register', usersController.create);

module.exports = userRouter;
