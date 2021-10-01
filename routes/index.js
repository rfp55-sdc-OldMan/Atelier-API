const products = require('./products');
const product = require('./product');
const styles = require('./styles');
const related = require('./related');

module.exports = (app) => {
  app.use('/products', products);
  app.use('/products', product);
  app.use('/products', styles);
  app.use('/products', related);
};
