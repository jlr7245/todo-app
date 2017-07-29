const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const render = require('./services/render');
app.get('/', render);
const userRouter = require('./routes/user-routes');
app.use('/user', userRouter);

app.use('*', (req, res) => {
  res.status(400).json({ message: 'Not found!' });
});
