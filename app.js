const express = require('express');
const logger = require('morgan');


const app = express();

app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('*', (req, res) => {
  res.status(400).json({message: 'Not found!'});
})