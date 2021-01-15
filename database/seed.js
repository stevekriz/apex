/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const faker = require('faker');
const db = require('./index.js');

// 100 different lists of images

const onePic = () => {
  return 'https://loremflickr.com/320/240/mansion';
};

const getPictures = () => {
  const numOfPics = Math.round(Math.random() * (18 - 12) + 12);
  const picArray = [];

  for (let i = 0; i < numOfPics; i++) {

    const staySet = getListData();
    picArray.push(
      {
        imgId: i,
        imgUrl: onePic,
        imgName: faker.internet.userName(),
        imgDescription: faker.name.jobDescriptor(),
        HouseType: faker.lorem.word(),
        description: faker.random.words(),
        isSuperHost: faker.random.boolean(),
        isLiked: faker.random.boolean(),
        AverageRating: Math.floor(Math.random() * (5 - 0)),
        NumberOfBeds: Math.round(Math.random() * (5 - 1) + 1),
        PricePerNight: Math.round(Math.random() * (350 - 120) + 120),
        staysList: staySet,
      });
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
    });

    newCarousel.save();
  }
};

SampleData();
