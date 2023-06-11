const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.jsonbin.io',
      changeOrigin: true,
      secure: false,
    })
  );
};