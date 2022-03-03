import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const MainHeader = (props) => {
  const { title, Suffix } = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.tickerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={{ color: "black" }}>{Suffix}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={{ paddingRight: 10 }}
        />
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingTop: 40,
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 180,
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    paddingBottom: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
