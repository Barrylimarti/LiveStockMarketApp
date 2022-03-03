import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StockHeader = (props) => {
  const navigation = useNavigation();
  const { shortName, exchange, exchangeTimezoneShortName } = props;
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Text style={styles.headerTitle}>{shortName}</Text>
        <Text style={{ color: "black" }}>
          {exchange}({exchangeTimezoneShortName})
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={{ paddingRight: 10 }}
        />
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          style={{ paddingRight: 10 }}
        />
        <FontAwesome name="star-o" size={24} color="black" />
      </View>
    </View>
  );
};

export default StockHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#f5f5f5",
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  tickerContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 5,
    paddingBottom: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
