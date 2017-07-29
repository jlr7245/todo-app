const db = require('../db/config');

const Todo = {};

Todo.findUserTodos = userID => {
  return db.manyOrNone(
    `
    SELECT * FROM todos
    WHERE user_id = $1
  `,
    [userID],
  );
};

Todo.create = todo => {
  return db.one(
    `
    INSERT INTO todos
    (user_id, title, description)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [todo.user_id, todo.title, todo.description],
  );
};

module.exports = Todo;
