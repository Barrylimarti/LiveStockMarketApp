import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import Stock from "../data/dummyData.json";
import StockHeader from "../components/StockHeader";
import StockSubHeader from "../components/StockSubHeader";
import OverviewScreen from "./OverviewScreen";
import { useRoute } from "@react-navigation/native";
import { getDetailedStockData } from "../services/requests";

const StockDetailScreen = () => {
  const [stock, setStock] = useState(null);
  const route = useRoute();
  const {
    params: { symbol },
  } = route;
  const [loading, setLoading] = useState(false);
  const fetchStockData = async () => {
    setLoading(true);
    const fetchedStockData = await getDetailedStockData(symbol);
    setStock(fetchedStockData);
    setLoading(false);
  };
  useEffect(async () => {
    await fetchStockData();
  }, []);

  if (loading || !stock) {
    return <ActivityIndicator size="large" />;
  }

  //console.log("stock", stock);

  const {
    shortName,
    exchange,
    exchangeTimezoneShortName,
    regularMarketPrice,
    regularMarketChangePercent,
    regularMarketChange,
    regularMarketTime,
    currency,
  } = stock;

  var date = new Date(regularMarketTime);
  const regularTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StockHeader
        shortName={shortName}
        exchange={exchange}
        exchangeTimezoneShortName={exchangeTimezoneShortName}
      />
      <StockSubHeader
        regularMarketPrice={regularMarketPrice}
        regularMarketChangePercent={regularMarketChangePercent}
        regularMarketChange={regularMarketChange}
        currency={currency}
        regularTime={regularTime}
      />
      <OverviewScreen stock={stock} symbol={symbol} />
    </SafeAreaView>
  );
};

export default StockDetailScreen;
