const { trades, portfolio, uuid } = require("../data/store");

/**
 * Simulates order execution
 * Market orders execute immediately
 */
function executeOrder(order, marketPrice) {
  order.status = "EXECUTED";

  const trade = {
    tradeId: uuid(),
    orderId: order.orderId,
    symbol: order.symbol,
    quantity: order.quantity,
    price: marketPrice,
    timestamp: new Date().toISOString()
  };

  trades.push(trade);

  // Update portfolio
  const existingHolding = portfolio.get(order.symbol);

  if (order.orderType === "BUY") {
    if (!existingHolding) {
      portfolio.set(order.symbol, {
        symbol: order.symbol,
        quantity: order.quantity,
        averagePrice: marketPrice
      });
    } else {
      const totalQty = existingHolding.quantity + order.quantity;
      const newAvg =
        (existingHolding.quantity * existingHolding.averagePrice +
          order.quantity * marketPrice) / totalQty;

      existingHolding.quantity = totalQty;
      existingHolding.averagePrice = Number(newAvg.toFixed(2));
    }
  }

  if (order.orderType === "SELL" && existingHolding) {
    existingHolding.quantity -= order.quantity;
  }
}

module.exports = { executeOrder };
