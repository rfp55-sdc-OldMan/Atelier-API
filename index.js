const express = require('express');
const mountRoutes = require('./routes');
// console.log(mountRoutes);

const app = express();
const port = 3000;

mountRoutes(app);

app.listen(port, () => {
  console.log(`connected to server at ${port}`);
});
