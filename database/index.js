const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photo_carousel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;
const { Schema } = mongoose;

const CarouselSchema = new Schema({
  id: Number,
  AverageRating: Number,
  HouseType: String,
  NumberOfBeds: Number,
  PricePerNight: String,
  description: String,
  isSuperHost: Boolean,
  isLiked: Boolean,
  ImgUrls: Array,
  stayList: Array,
});

const StayEntry = new Schema({
  stayId: Number,
  stayName: String,
  stayPic: String,
});

const CarouselModel = mongoose.model('CarouselModel', CarouselSchema);
const StayModel = mongoose.model('StayModel', StayEntry);

module.exports = {
  CarouselModel,
  StayModel,
  connection,
};
