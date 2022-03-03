import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StockItem from "./StockItem";

const VerticalList = () => {
  return (
    <View>
      <View style={styles.container}>
        <StockItem />
      </View>
    </View>
  );
};
export default VerticalList;
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
