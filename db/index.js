const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'products-db',
  password: '',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
