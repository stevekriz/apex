const model = require('../models/listingsModel.js');

const post = (req, res) => {
  model.post(req.body, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(success);
    }
  });
};

const patch = (req, res) => {
  model.patch(req.params.listing_id, req.body, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send(success);
    }
  });
};

const del = (req, res) => {
  model.del(req.params.listing_id, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send(success);
    }
  });
};

module.exports = {
  post,
  patch,
  del,
};
