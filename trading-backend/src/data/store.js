const { v4: uuid } = require("uuid");

/**
 * This file acts as a fake database.
 * Everything is stored in memory intentionally.
 * Restarting the server will reset data.
 */

const instruments = [
  {
    symbol: "TCS",
    exchange: "NSE",
    instrumentType: "EQUITY",
    lastTradedPrice: 3820
  },
  {
    symbol: "INFY",
    exchange: "NSE",
    instrumentType: "EQUITY",
    lastTradedPrice: 1560
  }
];

const orders = new Map();        // orderId → order
const trades = [];               // list of executed trades
const portfolio = new Map();     // symbol → holding

module.exports = {
  instruments,
  orders,
  trades,
  portfolio,
  uuid
};
