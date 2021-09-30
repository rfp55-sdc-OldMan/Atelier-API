const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/products', (req, res) => {
  res.json({ endpoint: 'list of products' });
});

app.get('/products/:product_id', (req, res) => {
  res.json({ endpoint: '1 product' });
});

app.get('/products/:product_id/styles', (req, res) => {
  res.json({ endpoint: 'product styles' });
});

app.get('/products/:product_id/related', (req, res) => {
  res.json({ endpoint: 'related products' });
});

app.listen(port, () => {
  console.log(`connected to server at ${port}`);
});
