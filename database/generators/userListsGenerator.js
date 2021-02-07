/* eslint-disable no-console */
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const userList = (startIndex, endIndex) => {
  const userLists = [];
  for (let i = startIndex + 1; i <= endIndex + 1; i += 1) {
    const numberOfUserLists = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    for (let j = 0; j < numberOfUserLists; j += 1) {
      const random = Math.floor(Math.random() * (503 - 1 + 1) + 1);
      const entry = {
        users_id: i,
        name: faker.lorem.word(),
        image_url: `https://airbnbsdc.s3-us-west-1.amazonaws.com/${random}.webp`,
      };
      userLists.push(entry);
    }
  }
  return userLists;
};

const csvWriter = createCsvWriter({
  path: '/Users/stevekriz/hr/sdc/carousel/database/CSV/userLists.csv',
  header: ['users_id', 'stay_name', 'stay_pic'],
});

async function writeUserLists(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing user lists chunk: ${i + 1}`);
    const userListDump = userList(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(userListDump);
  }
}

module.exports = {
  writeUserLists,
};
