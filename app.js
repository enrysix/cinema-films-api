const express = require('express');
const app = express();

/**
 * Server check
 */
app.get('/', (_req, res) => res.send('Cinema films server is up & running...'));

exports.App = app;