const express = require('express');
const db = require('../../database/index.js');

const getPictures = (params, cb) => {
  db.CarouselModel.find({ id: params.id }, cb);
};

const toggleLike = (req, cb) => {
  console.log(req.body);
  console.log(req.params.dataId);
  console.log(req.params.imgId);
  // db.CarouselModel.findOneAndUpdate({ id: dataId, imgId }, cb);
  cb(null, 'nice');
};

module.exports = {
  getPictures,
  toggleLike,
};
