const { Pool } = require('pg');
const pw = require('../config');

const pool = new Pool({
  user: 'api',
  host: '3.141.199.226',
  database: 'productsdb',
  password: pw.pw,
  port: 5432,
});

// local postgresQL
// const pool = new Pool({
//   user: 'api',
//   host: 'localhost',
//   database: 'productsdb',
//   password: pw.pw,
//   port: 5432,
// });

console.log('connected to postgresql');

module.exports = {
  query: (text, params) => pool.query(text, params),
};
