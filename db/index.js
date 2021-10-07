const { Pool } = require('pg');

const pool = new Pool({
  user: 'api',
  host: 'localhost',
  database: 'productsdb',
  password: 'apiuser',
  port: 5432,
});

console.log('connected to postgresql');

module.exports = {
  query: (text, params) => pool.query(text, params),
};
