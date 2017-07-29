const authController = {};

authController.login = (req, res, next) => {
  res.locals.meta = {
    path: 'auth/login',
    currentPage: 'login',
  };
  next();
};

authController.register = (req, res, next) => {
  res.locals.meta = {
    path: 'auth/register',
    currentPage: 'register',
  };
  next();
};

module.exports = authController;
