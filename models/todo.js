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

Todo.complete = (id, userid) => {
  return db.oneOrNone(
    `
    UPDATE todos
    SET completed = true
    WHERE id = $1
    AND user_id = $2
    RETURNING *
  `,
    [id, userid],
  );
};

module.exports = Todo;
