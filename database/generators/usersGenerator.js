/* eslint-disable no-console */
const faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const user = (startIndex, endIndex) => {
  const users = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    const entry = {
      user_name: faker.internet.userName(),
      user_password: faker.internet.password(),
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
    };
    users.push(entry);
  }
  return users;
};

const csvWriter = createCsvWriter({
  path: "/Users/stevekriz/hr/sdc/carousel/database/CSV/users.csv",
  header: ["user_name", "user_password", "email", "first_name", "last_name"],
});

async function writeUsers(n) {
  const currentChunk = Math.floor(n / 100);
  console.log("Chunk count: ", currentChunk);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing users chunk: ${i + 1}`);
    const userDump = user(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(userDump);
  }
}

module.exports = {
  writeUsers,
};
