module.exports = (req, res) => {
  res.render(res.locals.path || 'index', {
    data: res.locals.data || null,
    isUser: req.user ? true : false,
    currentPage: res.locals.page || 'index',
    user: req.user ? req.user : null,
  });
};
