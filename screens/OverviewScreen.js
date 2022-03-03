import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Dimensions } from "react-native";

import chartData from "../data/dummyChartData.json";
import { LineChart } from "react-native-chart-kit";
import FilterComponent from "../components/FilterComponent";
import AdditionalDetails from "../components/AdditionalDetails";
import { getStockMarketChart } from "../services/requests";

const OverviewScreen = (props) => {
  const { stock, symbol } = props;
  const [selectedRange, setSelectedRange] = useState("1d");
  const [stockMarketData, setStockMarketData] = useState({
    prices: [],
    timestamp: [],
  });
  const fetchStockChartData = async (selectedRangeValue) => {
    const fetchedStockMarketData = await getStockMarketChart(
      symbol,
      selectedRangeValue
    );
    //console.log(fetchedStockMarketData);
    setStockMarketData(fetchedStockMarketData);
  };
  useEffect(() => {
    fetchStockChartData("1d");
  }, []);
  //console.log(stockMarketData.prices, stockMarketData.timestamp.length);
  const points = [];
  for (var i = 0; i < stockMarketData.timestamp.length; i++) {
    points.push({
      x: stockMarketData.timestamp[i],
      y: stockMarketData.prices[i],
    });
  }
  //console.log(points);
  const onSelectedRangeChange = (selectedRangeValue) => {
    setSelectedRange(selectedRangeValue);
    fetchStockChartData(selectedRangeValue);
  };
  return (
    <View>
      <LineChart
        data={{
          labels: stockMarketData.timestamp,
          datasets: [
            {
              data: stockMarketData.prices,
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        yAxisInterval={4}
        withVerticalLines={false}
        withVerticalLabels={false}
        withShadow={false}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "#D3D3D3",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "2",
            strokeWidth: "2",
            stroke: "black",
          },
          propsForLabels: {
            stroke: "grey",
          },
          propsForBackgroundLines: {
            stroke: "grey",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#D3D3D3",
          marginVertical: 2,
          paddingVertical: 5,
          borderRadius: 10,
        }}
      >
        <FilterComponent
          style={{ color: "white" }}
          filterInterval="15m"
          filterText="1d"
          selectedRange={selectedRange}
          setSelectedRange={onSelectedRangeChange}
        />
        <FilterComponent
          style={{ color: "white" }}
          filterInterval="1d"
          filterText="5d"
          selectedRange={selectedRange}
          setSelectedRange={onSelectedRangeChange}
        />
        <FilterComponent
          style={{ color: "white" }}
          filterInterval="1wk"
          filterText="1mo"
          selectedRange={selectedRange}
          setSelectedRange={onSelectedRangeChange}
        />
        <FilterComponent
          style={{ color: "white" }}
          filterInterval="1mo"
          filterText="1y"
          selectedRange={selectedRange}
          setSelectedRange={onSelectedRangeChange}
        />
        <FilterComponent
          style={{ color: "white" }}
          filterInterval="1mo"
          filterText="5y"
          selectedRange={selectedRange}
          setSelectedRange={onSelectedRangeChange}
        />
        <FilterComponent
          style={{ color: "white" }}
          filterInterval="1mo"
          filterText="max"
          selectedRange={selectedRange}
          setSelectedRange={onSelectedRangeChange}
        />
      </View>
      <AdditionalDetails stock={stock} />
    </View>
  );
};
export default OverviewScreen;
