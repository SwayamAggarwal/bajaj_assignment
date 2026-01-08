const express = require("express");
const cors = require("cors");

const instrumentRoutes = require("./routes/instruments.routes");
const orderRoutes = require("./routes/orders.routes");
const tradeRoutes = require("./routes/trades.routes");
const portfolioRoutes = require("./routes/portfolio.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/instruments", instrumentRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/trades", tradeRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);

module.exports = app;
