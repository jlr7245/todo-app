const express = require('express');
const todoRouter = express.Router();

const todosController = require('../controllers/todos-controller');

const render = require('../services/render');

todoRouter.get('/', todosController.index, render);
todoRouter.post('/', todosController.create);

todoRouter.get('/new', todosController.new, render);

todoRouter.get('/:id', todosController.show, render);
todoRouter.put('/:id', todosController.update);
todoRouter.get('/:id/edit', todosController.edit, render);
todoRouter.delete('/:id', todosController.delete);

module.exports = todoRouter;