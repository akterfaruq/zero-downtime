// simple express app that prints the version (from env or package)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`<html><body><h1>My App — Version ${version}</h1></body></html>`);
});

// health/readiness endpoints
app.get('/healthz', (req, res) => res.status(200).send('ok'));
app.get('/ready', (req, res) => res.status(200).send('ready'));

app.listen(port, () => console.log(`Listening on ${port}, version=${version}`));
