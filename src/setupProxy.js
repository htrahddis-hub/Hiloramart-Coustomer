const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1", {
      target: "https://apiv2.shiprocket.in/v1/",
      secure: "false",
      logLevel: "debug",
      changeOrigin: true,
      pathRewrite: { "'^/api/": "/" },
    })
  );
};
