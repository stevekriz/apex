const db = require('../../database/index.js');

const get = (id, cb) => {
  const q = 'SELECT * FROM listings WHERE id IN (SELECT similar_listing_id FROM similar_listings WHERE primary_listing_id=$1);';
  const v = [id];
  db.query(q, v, cb);
};

module.exports = {
  get,
};
