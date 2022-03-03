const { addStockData } = require("./services/requests");

const res = addStockData("AAPL");
console.log(res);
