const express = require('express');
const Router = require('express-promise-router');
const mountRoutes = require('./routes');

const app = express();
const port = 3000;
const router = Router();
mountRoutes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

router.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

router.get('/products', (req, res) => {
  res.json({ endpoint: 'list of products' });
});

router.get('/products/:product_id/styles', (req, res) => {
  res.json({ endpoint: 'product styles' });
});

router.get('/products/:product_id/related', (req, res) => {
  res.json({ endpoint: 'related products' });
});

app.listen(port, () => {
  console.log(`connected to server at ${port}`);
});
