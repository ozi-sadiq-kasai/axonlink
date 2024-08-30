const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
     ['/axonlink', '/api', '/auth/google'],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};