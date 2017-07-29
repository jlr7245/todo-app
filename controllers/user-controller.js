const userController = {};

userController.login = (req, res, next) => {
  res.locals.meta = {
    path: 'user/login',
    currentPage: 'login',
  };
  next();
};

userController.register = (req, res, next) => {
  res.locals.meta = {
    path: 'user/register',
    currentPage: 'register',
  };
  next();
};

module.exports = userController;
