const Todo = require('../models/todo');
const catchErr = require('../services/catch');

const todosController = {};

todosController.index = (req, res, next) => {
  res.locals.meta = {
    path: 'todos/todos-index',
    currentPage: 'todos',
  };
  res.locals.data = {};
  Todo.findUserTodos(req.user.id)
    .then(todos => {
      res.locals.data.todos = todos;
      return next();
    })
    .catch(catchErr);
};

todosController.new = (req, res, next) => {
  res.locals.meta = {
    path: 'todos/todos-add',
    currentPage: 'add-todo',
  };
  next();
};

todosController.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    description: req.body.description,
    user_id: req.user.id,
  })
    .then(() => {
      res.redirect('/todo');
    })
    .catch(catchErr);
};

module.exports = todosController;
