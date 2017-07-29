module.exports = (req, res) => {
  if (!res.locals.meta) {
    res.locals.meta = {
      path: 'index',
      page: 'index',
    };
  }
  res.render(res.locals.meta.path, {
    data: res.locals.data || null,
    isUser: req.user ? true : false,
    currentPage: res.locals.meta.page,
    user: req.user ? req.user : null,
  });
};
