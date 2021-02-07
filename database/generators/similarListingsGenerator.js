/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const records = 1e6;

const similarListing = (startIndex, endIndex) => {
  const similarListings = [];
  for (let i = startIndex + 1; i <= endIndex + 1; i += 1) {
    const numberOfSimilarListings = Math.floor(Math.random() * (3 - 2 + 1) + 2) * 4;
    for (let j = 0; j < numberOfSimilarListings; j += 1) {
      const randomListings = Math.floor(Math.random() * (records - 1) + 1);
      const entry = {
        primary_listing_id: i,
        similar_listing_id: randomListings,
      };
      similarListings.push(entry);
    }
  }
  return similarListings;
};

const csvWriter = createCsvWriter({
  path: '/Users/stevekriz/hr/sdc/carousel/database/CSV/similarListings.csv',
  header: ['primary_listing_id', 'similar_listing_id'],
});

async function writeSimilarListings(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing similar listing chunk : ${i + 1}`);
    const similarListingDump = similarListing(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(similarListingDump);
  }
}

module.exports = {
  writeSimilarListings,
};
