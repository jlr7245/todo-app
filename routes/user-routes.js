const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user-controller');

const render = require('../services/render');

userRouter.get('/login', userController.login, render);
userRouter.get('/register', userController.register, render);

module.exports = userRouter;
