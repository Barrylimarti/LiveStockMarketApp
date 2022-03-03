const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StocksSchema = new Schema({
  symbol: String,
  shortName: String,
  exchange: String,
  exchangeTimezoneShortName: String,
  regularMarketPrice: Number,
  regularMarketChangePercent: Number,
  regularMarketChange: Number,
  regularMarketTime: Number,
  regularMarketPreviousClose: Number,
  regularMarketOpen: Number,
  regularMarketVolume: Number,
  currency: String,
  fiftyTwoWeekRange: String,
  regularMarketDayRange: String,
});

const StocksModel = mongoose.model("Stocks", StocksSchema);

module.exports = StocksModel;
