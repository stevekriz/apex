const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'postgres',
  database: 'carousel',
  port: 5432,
});
client.connect();
