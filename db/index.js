const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'products-db',
  password: '',
  port: 5432,
});

console.log('connected to postgresql');

module.exports = {
  query: (text, params) => pool.query(text, params),
};
