const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const Review = require("../models/review.js");
const reviewContrller = require("../controllers/review.js");

//Post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewContrller.createReview)
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewContrller.destroyReview)
);

module.exports = router;
