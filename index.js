require('newrelic');

const express = require('express');
const mountRoutes = require('./routes');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('You\'ve reached the server');
});

mountRoutes(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
