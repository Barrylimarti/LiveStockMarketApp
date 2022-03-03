import React from "react";
import { View, Text, ScrollView } from "react-native";

const AdditionalDetails = (props) => {
  const { stock } = props;
  const {
    regularMarketDayRange,
    fiftyTwoWeekRange,
    regularMarketPreviousClose,
    regularMarketOpen,
    regularMarketVolume,
  } = stock;
  return (
    <View
      style={{
        flexDirection: "column",
        paddingTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          paddingBottom: 5,
          paddingTop: 5,
          margin: 5,
        }}
      >
        <Text style={{ paddingLeft: 10 }}>Day's Range</Text>
        <Text style={{ paddingLeft: 120 }}>${regularMarketDayRange}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          paddingBottom: 5,
          paddingTop: 5,
          margin: 5,
        }}
      >
        <Text style={{ paddingLeft: 10 }}>52wk Range</Text>
        <Text style={{ paddingLeft: 120 }}>${fiftyTwoWeekRange}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          paddingBottom: 5,
          paddingTop: 5,
          margin: 5,
        }}
      >
        <Text style={{ paddingLeft: 10 }}>Previous Close</Text>
        <Text style={{ paddingLeft: 104 }}>${regularMarketPreviousClose}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          paddingBottom: 5,
          paddingTop: 5,
          margin: 5,
        }}
      >
        <Text style={{ paddingLeft: 10 }}>Open</Text>
        <Text style={{ paddingLeft: 164 }}>${regularMarketOpen}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          paddingBottom: 5,
          paddingTop: 5,
          margin: 5,
        }}
      >
        <Text style={{ paddingLeft: 10 }}>Volume</Text>
        <Text style={{ paddingLeft: 148 }}>${regularMarketVolume}</Text>
      </View>
    </View>
  );
};
export default AdditionalDetails;
