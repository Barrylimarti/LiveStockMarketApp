import axios from "axios";
import StocksModel from "../config/StockModel";

export const getDetailedStockData = async (symbol) => {
  try {
    var options = {
      method: "GET",
      url: "https://yfapi.net/v6/finance/quote",
      params: { symbols: `${symbol}` },
      headers: {
        //"x-api-key": "nnf9S2EMne9gJemBatCGG7jgkamta1bQ45GawSEW",
        "x-api-key": " edUd1RTxpT6TocLu0VRnO65HoGpOjj3N8bEda5PR",
      },
    };
    const res = await axios
      .request(options)
      .then(function (response) {
        return response.data.quoteResponse.result;
      })
      .catch(function (error) {
        console.error(error);
      });
    //console.log(res[0]);
    const Prices = [
      res[0].regularMarketPrice,
      res[0].regularMarketChangePercent,
      res[0].regularMarketChange,
      res[0].regularMarketPreviousClose,
      res[0].regularMarketOpen,
      res[0].regularMarketVolume,
    ];

    const rangeofWeek1 = res[0].fiftyTwoWeekRange.split(" - ")[0];
    const rangeofWeek2 = res[0].fiftyTwoWeekRange.split(" - ")[1];
    const rangeofDay1 = res[0].regularMarketDayRange.split(" - ")[0];
    const rangeofDay2 = res[0].regularMarketDayRange.split(" - ")[1];

    const cleanedData = {
      shortName: res[0].shortName,
      exchange: res[0].exchange,
      exchangeTimezoneShortName: res[0].exchangeTimezoneShortName,
      regularMarketPrice: Math.round(Prices[0] * 100) / 100,
      regularMarketChangePercent: Math.round(Prices[1] * 100) / 100,
      regularMarketChange: Math.round(Prices[2] * 100) / 100,
      regularMarketTime: res[0].regularMarketTime,
      regularMarketPreviousClose: Math.round(Prices[3] * 100) / 100,
      regularMarketOpen: Math.round(Prices[4] * 100) / 100,
      regularMarketVolume: Math.round(Prices[5] * 100) / 100,
      currency: res[0].currency,
      fiftyTwoWeekRange:
        "" +
        Math.round(rangeofWeek1 * 100) / 100 +
        "-" +
        "" +
        Math.round(rangeofWeek2 * 100) / 100,
      regularMarketDayRange:
        "" +
        Math.round(rangeofDay1 * 100) / 100 +
        "-" +
        "" +
        Math.round(rangeofDay2 * 100) / 100,
    };
    //console.log(cleanedData);
    return cleanedData;
    //const response=axios.get(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${symbol}`)
  } catch (error) {
    console.log(error);
  }
};

export const getStockMarketChart = async (symbol, selectedRange) => {
  try {
    //console.log(symbol, selectedRange);
    const interval =
      selectedRange === "1d"
        ? "15m"
        : selectedRange === "5d"
        ? "1d"
        : selectedRange === "1mo"
        ? "1wk"
        : "1mo";
    const res = await axios.get(
      `https://yfapi.net/v8/finance/chart/${symbol}?range=${selectedRange}&region=US&interval=${interval}&lang=en&events=div%2Csplit`,
      {
        headers: {
          //"x-api-key": "nnf9S2EMne9gJemBatCGG7jgkamta1bQ45GawSEW",
          "x-api-key": "edUd1RTxpT6TocLu0VRnO65HoGpOjj3N8bEda5PR",
        },
      }
    );
    const prices = res.data.chart.result[0].indicators.quote[0].high;
    const timestamp = res.data.chart.result[0].timestamp;
    return { prices: prices, timestamp: timestamp };
  } catch (error) {
    console.log(error);
  }
};
export const addStockData = async (symbol) => {
  try {
    var options = {
      method: "GET",
      url: "https://yfapi.net/v6/finance/quote",
      params: { symbols: `${symbol}` },
      headers: {
        //"x-api-key": "nnf9S2EMne9gJemBatCGG7jgkamta1bQ45GawSEW",
        "x-api-key": "edUd1RTxpT6TocLu0VRnO65HoGpOjj3N8bEda5PR",
      },
    };
    const res = await axios
      .request(options)
      .then(function (response) {
        return response.data.quoteResponse.result;
      })
      .catch(function (error) {
        console.error(error);
      });
    const Prices = [
      res[0].regularMarketPrice,
      res[0].regularMarketChangePercent,
      res[0].regularMarketChange,
      res[0].regularMarketPreviousClose,
      res[0].regularMarketOpen,
      res[0].regularMarketVolume,
    ];
    //console.log(Math.round(Prices[1] * 100) / 100);
    const cleanedDayRange =
      res[0].regularMarketDayRange.split("-")[0][0] +
      res[0].regularMarketDayRange.split("-")[0][1] +
      res[0].regularMarketDayRange.split("-")[0][2] +
      res[0].regularMarketDayRange.split("-")[0][3];
    const cleanedWeekRange =
      res[0].fiftyTwoWeekRange.split("-")[0][0] +
      res[0].fiftyTwoWeekRange.split("-")[0][1] +
      res[0].fiftyTwoWeekRange.split("-")[0][2] +
      res[0].fiftyTwoWeekRange.split("-")[0][3];
    const cleanedDayRange2 =
      res[0].regularMarketDayRange.split("-")[1][0] +
      res[0].regularMarketDayRange.split("-")[1][1] +
      res[0].regularMarketDayRange.split("-")[1][2] +
      res[0].regularMarketDayRange.split("-")[1][3];
    const cleanedWeekRange2 =
      res[0].fiftyTwoWeekRange.split("-")[1][0] +
      res[0].fiftyTwoWeekRange.split("-")[1][1] +
      res[0].fiftyTwoWeekRange.split("-")[1][2] +
      res[0].fiftyTwoWeekRange.split("-")[1][3];

    const cleanedData = await StocksModel({
      symbol: symbol,
      shortName: res[0].shortName,
      exchange: res[0].exchange,
      exchangeTimezoneShortName: res[0].exchangeTimezoneShortName,
      regularMarketPrice: Math.round(Prices[0] * 100) / 100,
      regularMarketChangePercent: Math.round(Prices[1] * 100) / 100,
      regularMarketChange: Math.round(Prices[2] * 100) / 100,
      regularMarketTime: res[0].regularMarketTime,
      regularMarketPreviousClose: Math.round(Prices[3] * 100) / 100,
      regularMarketOpen: Math.round(Prices[4] * 100) / 100,
      regularMarketVolume: Math.round(Prices[5] * 100) / 100,
      currency: res[0].currency,
      fiftyTwoWeekRange: cleanedWeekRange + " - " + cleanedWeekRange2,
      regularMarketDayRange: cleanedDayRange + " - " + cleanedDayRange2,
    });
    await cleanedData.save();
    //console.log(cleanedData);
    return cleanedData;
  } catch (error) {
    console.log(error);
  }
};

export const deleteStockData = async (symbol) => {
  try {
    await StocksModel.deleteMany({ symbol: symbol });
    return 1;
  } catch (error) {
    console.log(error);
  }
};
