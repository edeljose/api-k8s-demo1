const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong1' }); // pong1 es intencional para que falle el test
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`);
  });
}

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});


module.exports = app;

