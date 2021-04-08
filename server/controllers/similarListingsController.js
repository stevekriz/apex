const model = require("../models/similarListingsModel.js");

const get = (req, res) => {
  model.get(req.params.primary_listing_id, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(success);
    }
  });
};

module.exports = {
  get,
};
