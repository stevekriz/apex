const express = require("express");

const router = express.Router();

const similarListings = require("./controllers/similarListingsController.js");
const listings = require("./controllers/listingsController.js");

router.get("/:primary_listing_id", similarListings.get);
router.post("/", listings.post);
router.patch("/:listing_id", listings.patch);
router.delete("/:listing_id", listings.del);

module.exports = router;
