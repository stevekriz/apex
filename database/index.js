const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'carousel',
  user: 'postgres',
  password: 'postgres',
});

pool.connect();

module.exports = pool;
