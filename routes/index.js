const products = require('./products');
const product = require('./product');
const styles = require('./styles');

module.exports = (app) => {
  app.use('/products', products);
  app.use('/products', product);
  app.use('/products', styles);
};
