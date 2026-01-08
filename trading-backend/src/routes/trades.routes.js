const express = require("express");
const router = express.Router();
const { trades } = require("../data/store");

/**
 * Fetch all executed trades
 */
router.get("/", (req, res) => {
  res.status(200).json(trades);
});

module.exports = router;
