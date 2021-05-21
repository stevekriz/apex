/* eslint-disable no-console */
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const listing = (startIndex, endIndex) => {
  const listings = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    const random = Math.floor(Math.random() * (503 - 1 + 1) + 1);
    const entry = {
      image_url: `../../public/assets/pictures/${random}.webp`,
      house_type: faker.lorem.word(),
      description: faker.lorem.words(),
      is_super_host: faker.datatype.boolean(),
      average_rating: (Math.random() * (5 - 0) + 0).toFixed(2),
      number_of_beds: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      number_of_reviews: Math.floor(Math.random() * (50 - 10 + 1) + 10),
      price_per_night: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    };
    listings.push(entry);
  }
  return listings;
};

const csvWriter = createCsvWriter({
  path: './database/CSV/listings.csv',
  header: [
    'image_url',
    'house_type',
    'description',
    'is_super_host',
    'average_rating',
    'number_of_beds',
    'number_of_reviews',
    'price_per_night',
  ],
});

async function writeListings(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing listing chunk: ${i + 1}`);
    const listingDump = listing(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(listingDump);
  }
}

module.exports = {
  writeListings,
};
