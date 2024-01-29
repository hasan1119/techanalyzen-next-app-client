const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();
    // apply proxy in dev mode
    if (dev) {
      server.use(
        '/api',
        createProxyMiddleware({
          target: `${process.env.SERVER_URL}`,
          changeOrigin: true,
        })
      )
      server.use(
        '/files',
        createProxyMiddleware({
          target: `${process.env.SERVER_URL}`,
          changeOrigin: true,
        })
      )
    }

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Error', err);
  });
