/* eslint-disable camelcase */

const express = require('express');
const http = require('http');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const { Pool } = require('pg');
require('newrelic');

const pool = new Pool({
  database: 'carousel',
  port: 5432,
});

pool.connect();

http.globalAgent.maxSockets = Infinity;

const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use('/:id/bundle', express.static(path.join(__dirname, '../public/bundle.js')));

app.get('/api/similar_listings/:primary_listing_id', (req, res) => {
  const q = 'SELECT * FROM listings WHERE id IN (SELECT similar_listing_id FROM similar_listings WHERE primary_listing_id=$1);';
  const v = [req.params.primary_listing_id];
  pool.query(q, v, (err, success) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(success);
  });
});

app.post('/api/listings', (req, res) => {
  const q = 'INSERT INTO listings (image_url, house_type, description, is_super_host, average_rating, number_of_beds, number_of_reviews, price_per_night) values ($1, $2, $3, $4, $5, $6, $7, $8)';
  const {
    image_url,
    house_type,
    description,
    is_super_host,
    average_rating,
    number_of_beds,
    number_of_reviews,
    price_per_night,
  } = req.body;
  const v = [
    image_url,
    house_type,
    description,
    is_super_host,
    average_rating,
    number_of_beds,
    number_of_reviews,
    price_per_night,
  ];
  pool.query(q, v, (err, success) => {
    if (err) res.status(400).send(err);
    else res.status(201).send(success);
  });
});

app.patch('/api/listings/:listing_id', (req, res) => {
  const keys = Object.keys(req.body).filter((k) => req.body[k] !== undefined);
  const names = keys.map((k, index) => `${k} = $${index + 1}`).join(', ');
  const v = keys.map((k) => req.body[k]);
  const q = `UPDATE listings SET ${names} WHERE id=$${keys.length + 1}`;
  const values = [...v, req.params.listing_id];
  pool.query(q, values, (err, success) => {
    if (err) res.status(400).send(err);
    else res.status(204).send(success);
  });
});

app.delete('/api/listings/:listing_id', (req, res) => {
  const q = 'DELETE FROM listings WHERE id=$1';
  const v = [req.params.listing_id];
  pool.query(q, v, (err, success) => {
    if (err) res.status(400).send(err);
    else res.status(204).send(success);
  });
});

app.listen(port);
