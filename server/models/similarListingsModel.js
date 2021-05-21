const db = require('../../database/index.js');

const get = (id, cb) => {
  const query =
    'SELECT * FROM listings WHERE id IN (SELECT similar_listing_id FROM similar_listings WHERE primary_listing_id=$1);';
  const values = [id];
  db.query(query, values, cb);
};

module.exports = {
  get,
};
