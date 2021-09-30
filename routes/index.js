const product = require('./product');

module.exports = (app) => {
  app.use('/products', product);
};
