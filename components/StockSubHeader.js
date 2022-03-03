import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
  Feather,
} from "@expo/vector-icons";

const StockSubHeader = (props) => {
  const {
    regularMarketPrice,
    regularMarketChange,
    regularMarketChangePercent,
    regularTime,
    currency,
  } = props;
  return (
    <View style={styles.subHeaderContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {regularMarketChangePercent > 0 ? (
          <Entypo name="arrow-bold-up" size={25} color="#32cd32" />
        ) : (
          <Entypo name="arrow-bold-down" size={20} color="#ea3943" />
        )}
        <Text style={styles.subHeaderTitle}>{regularMarketPrice}</Text>
        {regularMarketChangePercent > 0 ? (
          <Text
            style={{
              color: "#32cd32",
              paddingLeft: 35,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            +{regularMarketChange} (+{regularMarketChangePercent}%)
          </Text>
        ) : (
          <Text
            style={{
              color: "#ea3943",
              paddingLeft: 35,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            {regularMarketChange} ({regularMarketChangePercent}%)
          </Text>
        )}
        <Feather
          name="upload"
          size={24}
          color="gray"
          style={{ paddingLeft: 28 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
          paddingLeft: 35,
        }}
      >
        <Ionicons
          name="timer-outline"
          size={14}
          color="red"
          style={{ paddingRight: 5 }}
        />
        <Text style={styles.subHeaderSubTitle}>
          {regularTime} | Real Time. Currency in {currency}
        </Text>
      </View>
    </View>
  );
};

export default StockSubHeader;

const styles = StyleSheet.create({
  subHeaderContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    marginTop: 5,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 2,
  },
  subHeaderTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 10,
  },
  subHeaderSubTitle: {
    color: "grey",
    fontSize: 12,
  },
  tickerContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 5,
    paddingBottom: 5,
  },
});
