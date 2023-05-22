module.exports = async (context) => {
  return context.res.send('<h1>Hello! 👋</h1>', 200, {
    'content-type': 'text/html'
  });
};