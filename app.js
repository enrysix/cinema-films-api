const express = require('express');
const app = express();

/**
 * Server check
 */
app.get('/', (_req, res) => res.send('Cinema films server is up & running...'));

/**
 *  Proxy routes to API
 *  Note: All methods are added in case you want to work with more endpoints later
 */
const proxy = require('./services/proxy');
const { handleRes } = require('./services/middleware');
const backRouter = express.Router();

backRouter.get(
    '/**',
    handleRes((req, _res) => proxy.get(req))
  );
backRouter.post(
    '/**',
    handleRes((req, _res) => proxy.post(req))
);
backRouter.put(
    '/**',
    handleRes((req, _res) => proxy.put(req))
);
backRouter.patch(
    '/**',
    handleRes((req, _res) => proxy.patch(req))
);
backRouter.delete(
    '/**',
    handleRes((req, _res) => proxy.delete(req))
);

app.use('/api', backRouter);

exports.App = app;