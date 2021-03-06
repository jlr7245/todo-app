const options = {
  query: e => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);

module.exports = (() => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'todo_dev',
      port: 5432,
      host: 'localhost',
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
})();
