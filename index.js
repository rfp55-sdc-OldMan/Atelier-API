require('newrelic');

const express = require('express');
const mountRoutes = require('./routes');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('You\'ve reached the server');
});

app.get('/loaderio-939ed26f2c2611e4f593f0fe99e58506/', (req, res) => {
  res.send('loaderio-939ed26f2c2611e4f593f0fe99e58506');
});

mountRoutes(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
