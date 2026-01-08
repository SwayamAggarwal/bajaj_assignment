const { v4: uuid } = require("uuid");



const instruments = [
  {
    symbol: "Bajaj Finance Ltd",
    exchange: "NSE",
    instrumentType: "EQUITY",
    lastTradedPrice: 970.10
  },
  {
    symbol: "MRF Ltd",
    exchange: "NSE",
    instrumentType: "EQUITY",
    lastTradedPrice: 148000.00
  }
];

const orders = new Map();        
const trades = [];               
const portfolio = new Map();     

module.exports = {
  instruments,
  orders,
  trades,
  portfolio,
  uuid
};
