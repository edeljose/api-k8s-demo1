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

module.exports = app;

