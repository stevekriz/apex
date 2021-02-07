const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'carousel',
  port: 5432,
});
pool.connect();

module.exports = pool;
