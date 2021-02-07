const listings = require('./generators/listingsGenerator.js');
const similarListings = require('./generators/similarListingsGenerator.js');
const usersGenerator = require('./generators/usersGenerator.js');
const userLists = require('./generators/userListsGenerator.js');
const userListListings = require('./generators/userListListingsGenerator.js');

const records = 800000;

listings.writeListings(records);
similarListings.writeSimilarListings(records);
usersGenerator.writeUsers(records);
userLists.writeUserLists(records);
userListListings.writeUserListListings(records);
