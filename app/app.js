#!/usr/bin/node
const express = require('express');
const fetch = require('node-fetch');
const bp = require('body-parser');
const app = express();
const logger = require('./src/logger');
const port = 8080;

// configure express to accept and parse JSON in body
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

function logRequest(req, res, next) {
  logger.info({"endpoint": req.originalUrl, "type": req.method, "body": req.body});
  next();
}

app.use(logRequest);

app.get('/', (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`App Started`)
});