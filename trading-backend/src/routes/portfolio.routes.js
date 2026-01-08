const express = require("express");
const router = express.Router();
const { portfolio, instruments } = require("../data/store");


router.get("/", (req, res) => {
  const holdings = [];

  portfolio.forEach((value) => {
    const instrument = instruments.find(i => i.symbol === value.symbol);

    holdings.push({
      symbol: value.symbol,
      quantity: value.quantity,
      averagePrice: value.averagePrice,
      currentValue: value.quantity * instrument.lastTradedPrice
    });
  });

  res.status(200).json(holdings);
});

module.exports = router;
