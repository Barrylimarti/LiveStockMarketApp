import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const StockItem = ({ marketStock }) => {
  const {
    symbol,
    shortName,
    regularMarketTime,
    fullExchangeName,
    regularMarketPrice,
    regularMarketChangePercent,
    regularMarketChange,
  } = marketStock;
  var date = new Date(regularMarketTime);
  const regularTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const navigation = useNavigation();
  //console.log(symbol);
  //console.log(avatar);
  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() =>
        navigation.navigate("StockDetailScreen", { symbol: symbol })
      }
    >
      <View>
        <Text style={styles.title}>{shortName}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="timer-outline"
            size={14}
            color="red"
            style={{ paddingRight: 5 }}
          />
          <Text style={styles.text}>{regularTime}</Text>
          <Text style={styles.text}>| {symbol}</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{regularMarketPrice}</Text>
        {regularMarketChangePercent < 0 ? (
          <Text style={{ color: "#ea3943", fontWeight: "bold" }}>
            {regularMarketChange}({regularMarketChangePercent}%)
          </Text>
        ) : (
          <Text style={{ color: "#32cd32", fontWeight: "bold" }}>
            +{regularMarketChange}(+{regularMarketChangePercent}%)
          </Text>
        )}
      </View>
    </Pressable>
  );
};
export default StockItem;
const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: "grey",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});
