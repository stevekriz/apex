/* eslint-disable camelcase */
const db = require('../../database/index.js');

const post = (body, cb) => {
  const query =
    'INSERT INTO listings (image_url, house_type, description, is_super_host, average_rating, number_of_beds, number_of_reviews, price_per_night) values ($1, $2, $3, $4, $5, $6, $7, $8)';
  const {
    image_url,
    house_type,
    description,
    is_super_host,
    average_rating,
    number_of_beds,
    number_of_reviews,
    price_per_night,
  } = body;
  const values = [
    image_url,
    house_type,
    description,
    is_super_host,
    average_rating,
    number_of_beds,
    number_of_reviews,
    price_per_night,
  ];
  db.query(query, values, cb);
};

const patch = (id, body, cb) => {
  const keys = Object.keys(body).filter(k => body[k] !== undefined);
  const names = keys.map((k, index) => `${k} = $${index + 1}`).join(', ');
  const v = keys.map(k => body[k]);
  const query = `UPDATE listings SET ${names} WHERE id=$${keys.length + 1}`;
  const values = [...v, id];
  db.query(query, values, cb);
};

const del = (id, cb) => {
  const query = 'DELETE FROM listings WHERE id=$1';
  const value = [id];
  db.query(query, value, cb);
};

module.exports = {
  post,
  patch,
  del,
};
