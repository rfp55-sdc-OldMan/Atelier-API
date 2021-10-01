const products = require('./products');
const product = require('./product');

module.exports = (app) => {
  app.use('/products', product);
  app.use('/products', products);
};
