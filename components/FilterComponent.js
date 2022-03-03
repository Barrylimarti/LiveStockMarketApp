import React from "react";
import { View, Text, Pressable } from "react-native";

const FilterComponent = (props) => {
  const { filterInterval, filterText, selectedRange, setSelectedRange } = props;
  const isFilterSelected = (filter) => filter === selectedRange;
  //console.log("filterText:", filterText);
  return (
    <Pressable
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: isFilterSelected(filterText) ? "white" : "transparent",
      }}
      onPress={() => setSelectedRange(filterText)}
    >
      <Text style={{ color: isFilterSelected(filterText) }}>{filterText}</Text>
    </Pressable>
  );
};
export default FilterComponent;
