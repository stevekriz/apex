/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const faker = require('faker');
const db = require('./index.js');

// 100 different lists of images

const getPictures = () => {
  const numOfPics = Math.round(Math.random() * (18 - 12) + 12);
  const picArray = [];
  for (let i = 0; i < numOfPics; i++) {
    picArray.push(
      {
        imgId: i,
        imgUrl: faker.image.nightlife(),
        imgName: faker.internet.userName(),
        imgDescription: faker.name.jobDescriptor(),
      },
    );
  }
  return picArray;
};

const getListData = () => {
  const numOfStays = Math.round(Math.random() * (5 - 1) + 1);
  const listArray = [];
  for (let i = 0; i < numOfStays; i++) {
    listArray.push({
      stayId: i,
      stayName: faker.random.word(),
      stayPic: faker.random.image(),
    });
  }
  return listArray;
};

const SampleData = () => {
  for (let i = 1; i <= 100; i++) {
    const imgSet = getPictures();
    const staySet = getListData();
    const newCarousel = new db.CarouselModel({
      id: i,
      ImgUrls: imgSet,
      HouseType: faker.lorem.word(),
      description: faker.random.words(),
      isSuperHost: faker.random.boolean(),
      isLiked: faker.random.boolean(),
      AverageRating: Math.floor(Math.random() * (5 - 0)),
      NumberOfBeds: Math.round(Math.random() * (5 - 1) + 1),
      PricePerNight: Math.round(Math.random() * (350 - 120) + 120),
      staysList: staySet,
    });

    newCarousel.save();
  }
};

SampleData();
