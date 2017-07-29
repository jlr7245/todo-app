const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/auth-controller');

const render = require('../services/render');

authRouter.get('/login', authController.login, render);
authRouter.get('/register', authController.register, render);

module.exports = authRouter;
