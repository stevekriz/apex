/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const records = 500000;

const userListListing = (startIndex, endIndex) => {
  const userListListings = [];
  for (let i = startIndex + 1; i <= endIndex + 1; i += 1) {
    const numberOfUserListListings = Math.floor(
      Math.random() * (3 - 0 + 1) + 0
    );
    for (let j = 0; j < numberOfUserListListings; j += 1) {
      const randomListings = Math.floor(Math.random() * (records - 1) + 1);
      const entry = {
        user_lists_id: i,
        listing_id: randomListings,
      };
      userListListings.push(entry);
    }
  }
  return userListListings;
};

const csvWriter = createCsvWriter({
  path: './database/CSV/userListListings.csv',
  header: ['user_lists_id', 'listing_id'],
});

async function writeUserListListings(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing user list listings chunk : ${i + 1}`);
    const userListListingDump = userListListing(
      currentChunk * i,
      currentChunk * (i + 1) - 1
    );
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(userListListingDump);
  }
}

module.exports = {
  writeUserListListings,
};
