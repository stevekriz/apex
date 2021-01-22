const db = require('../../database/index.js');

const getPictures = (params, cb) => {
  db.CarouselModel.find({ id: params.id }, cb);
};

const toggleLike = (req, cb) => {
  const { isLiked } = req.body;
  const dataId = req.params;
  const { imgId } = req.params;
  db.CarouselModel.update(
    {
      id: dataId,
      imgId,
    },
    {
      $set: { isLiked: !isLiked },
    }, cb,
  );
};

module.exports = {
  getPictures,
  toggleLike,
};
