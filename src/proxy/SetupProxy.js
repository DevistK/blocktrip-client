import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app) => {
  app.use(
    createProxyMiddleware(["/user"], {
      target: "http://localhost:3001",
      changeOrigin: true,
      router: { "localhost:3000/user": "localhost:3001" },
    })
  );
};
