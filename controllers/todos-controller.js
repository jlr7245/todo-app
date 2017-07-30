const Todo = require('../models/todo');
const catchErr = require('../services/catch');

const todosController = {};

todosController.index = (req, res, next) => {
  res.locals.meta = {
    path: 'todos/todos-index',
    page: 'todos',
  };
  res.locals.data = {};
  Todo.findUserTodos(req.user.id)
    .then(todos => {
      res.locals.data.todos = todos;
      return next();
    })
    .catch(err => catchErr(err, req, res));
};

todosController.new = (req, res, next) => {
  res.locals.meta = {
    path: 'todos/todos-add',
    page: 'add-todo',
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
    .catch(err => catchErr(err, req, res));
};

todosController.complete = (req, res) => {
  Todo.complete(req.params.id, req.user.id)
    .then(() => {
      res.json({ message: 'update successful', successful: true });
    })
    .catch(err => catchErr(err, req, res));
};

module.exports = todosController;
