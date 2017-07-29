const express = require('express');
const todoRouter = express.Router();

const todosController = require('../controllers/todos-controller');
const userHelpers = require('../services/user/user-helpers');

const render = require('../services/render');

todoRouter.get('/', userHelpers.loginRequired, todosController.index, render);
todoRouter.post('/', userHelpers.loginRequired, todosController.create);

todoRouter.get('/new', userHelpers.loginRequired, todosController.new, render);

// todoRouter.get('/:id', todosController.show, render);
// todoRouter.put('/:id', todosController.update);
// todoRouter.get('/:id/edit', todosController.edit, render);
// todoRouter.delete('/:id', todosController.delete);

module.exports = todoRouter;
