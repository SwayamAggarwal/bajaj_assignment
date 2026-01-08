const express = require("express");
const router = express.Router();
const { instruments, orders, uuid } = require("../data/store");
const { executeOrder } = require("../services/orderExecution.service");


router.post("/", (req, res) => {
  const { symbol, orderType, orderStyle, quantity, price } = req.body;

  if (!symbol || !orderType || !orderStyle || quantity <= 0) {
    return res.status(400).json({ error: "Invalid order request" });
  }

  if (orderStyle === "LIMIT" && !price) {
    return res.status(400).json({ error: "Price required for LIMIT order" });
  }

  const instrument = instruments.find(i => i.symbol === symbol);
  if (!instrument) {
    return res.status(404).json({ error: "Instrument not found" });
  }

  const orderId = uuid();

  const order = {
    orderId,
    symbol,
    orderType,
    orderStyle,
    quantity,
    price: price || instrument.lastTradedPrice,
    status: "PLACED",
    createdAt: new Date().toISOString()
  };

  
  if (orderStyle === "MARKET") {
    executeOrder(order, instrument.lastTradedPrice);
  }

  orders.set(orderId, order);

  res.status(201).json(order);
});


router.get("/:orderId", (req, res) => {
  const order = orders.get(req.params.orderId);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.status(200).json(order);
});

module.exports = router;
