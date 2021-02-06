const faker = require('faker');
const fs = require('fs');

const records = 10;
const encoding = 'utf8';

const start = new Date();

const writeListingsCSV = fs.createWriteStream('listings.csv');
for (let i = 0; i < records; i += 1) {
  const listings = [];
  listings.push('https://airbnbsdc.s3-us-west-1.amazonaws.com/1.webp');
  listings.push(faker.lorem.word());
  listings.push(faker.lorem.words());
  listings.push(faker.random.boolean());
  listings.push((Math.random() * (5 - 0) + 0).toFixed(2));
  listings.push(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  listings.push(Math.floor(Math.random() * (50 - 10 + 1) + 10));
  listings.push(Math.floor(Math.random() * (1000 - 100 + 1) + 100));
  const csvRow = `${listings.join(',')}\n`;
  if (i === records - 1) {
    writeListingsCSV.write(csvRow, encoding, () => writeListingsCSV.end());
  } else {
    writeListingsCSV.write(csvRow, encoding);
  }
}

const writeSimilarListingsCSV = fs.createWriteStream('similar_listings.csv');
for (let i = 1; i <= records; i += 1) {
  const similarListings = Math.floor(Math.random() * (4 - 2 + 1) + 2) * 4;
  for (let j = 0; j < similarListings; j += 1) {
    const listings = [];
    const randomListings = Math.floor(Math.random() * (records - 1) + 1);
    listings.push(i);
    listings.push(randomListings);
    const csvRow = `${listings.join(',')}\n`;
    if (i === records - 1) {
      writeSimilarListingsCSV.write(csvRow, encoding, () => writeSimilarListingsCSV.end());
    } else {
      writeSimilarListingsCSV.write(csvRow, encoding);
    }
  }
}

const writeUsersCSV = fs.createWriteStream('users.csv');
for (let i = 0; i < records; i += 1) {
  const users = [];
  users.push(faker.internet.userName());
  users.push(faker.internet.password());
  users.push(faker.internet.email());
  users.push(faker.name.firstName());
  users.push(faker.name.lastName());
  const csvRow = `${users.join(',')}\n`;
  if (i === records - 1) {
    writeUsersCSV.write(csvRow, encoding, () => writeUsersCSV.end());
  } else {
    writeUsersCSV.write(csvRow, encoding);
  }
}

const end = new Date();
const seconds = (end.getTime() - start.getTime()) / 1000;
const minutes = Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
const writeSpeedTestsCSV = fs.createWriteStream('speedTests.csv');
writeSpeedTestsCSV.write(`Seconds: ${seconds}, Minutes: ${minutes}`, encoding, () => writeSpeedTestsCSV.end());
