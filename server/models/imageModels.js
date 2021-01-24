const db = require('../../database/index.js');

const getPictures = (params, cb) => {
  db.CarouselModel.find({ _id: params.id }, cb);
};

const toggleLike = (req, cb) => {
  const { isLiked } = req.body;
  const { dataId, imgId } = req.params;

  db.CarouselModel.find(
    { id: dataId, 'id.ImgUrls.imgId': imgId }, cb,
  );
};

module.exports = {
  getPictures,
  toggleLike,
};
