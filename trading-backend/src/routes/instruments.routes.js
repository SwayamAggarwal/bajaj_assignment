const express = require("express");
const router = express.Router();
const { instruments } = require("../data/store");


router.get("/", (req, res) => {
  
  res.status(200).json(instruments);
});

module.exports = router;
