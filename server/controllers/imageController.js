const express = require('express');

const models = require('../models/imageModels.js');

const getPictures = (req, res) => {
  models.getPictures(req.params, (err, pictures) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(pictures);
    }
  });
};

const toggleLike = (req, res) => {
  models.toggleLike(req, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getPictures,
  toggleLike,
};
