const listings = require('./generators/listingsGenerator.js');
const similarListings = require('./generators/similarListingsGenerator.js');
const users = require('./generators/usersGenerator.js');
const userLists = require('./generators/userListsGenerator.js');
const userListListings = require('./generators/userListListingsGenerator.js');

const records = 500000;

listings.writeListings(records);
similarListings.writeSimilarListings(records);
users.writeUsers(records);
userLists.writeUserLists(records);
userListListings.writeUserListListings(records);
