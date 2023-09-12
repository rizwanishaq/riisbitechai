const { createProxyMiddleware } = require("http-proxy-middleware");
const WebSocket = require("ws");

const proxyConfig = {
  target: "http://localhost:",
  changeOrigin: true,
  secure: true,
};

const wsProxyConfig = {
  target: "wss://devavatar.utopia.ai",
  ws: true,
  changeOrigin: true,
  secure: false,
};

const apiProxy = createProxyMiddleware(proxyConfig);
const wsProxy = createProxyMiddleware(wsProxyConfig);

module.exports = function (app) {
  // API proxy
  app.use("/api", apiProxy);

  // WebSocket proxy
  app.use(
    "/ws",
    (req, res, next) => {
      req.url = req.originalUrl;
      next();
    },
    wsProxy
  );
};
