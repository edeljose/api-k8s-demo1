require('./tracing'); // 🔴 Importar antes que todo

const express = require('express');
const client = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;

client.collectDefaultMetrics();

const counter = new client.Counter({
  name: 'http_requests_total',
  help: 'Número total de solicitudes HTTP a /ping'
});

app.get('/ping', (req, res) => {
  counter.inc();
  res.json({ message: 'pong1' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API corriendo  en http://localhost:${port}`);
  });
}

module.exports = app;

