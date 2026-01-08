const express = require("express");
const router = express.Router();
const { instruments } = require("../data/store");

/**
 * Fetch all tradable instruments
 */
router.get("/", (req, res) => {
  res.status(200).json(instruments);
});

module.exports = router;
