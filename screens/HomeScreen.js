import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import StockHeader from "../components/StockHeader";
import StockItem from "../components/StockItem";
import dummyData from "../data/dummyData.json";
import MainHeader from "../components/MainHeader";

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView>
      <View>
        <MainHeader title="Investing" Suffix=".com" />
        <View style={{ paddingTop: 5, borderRadius: 6 }}>
          <Button title="Start Trading" color="green" />
        </View>
        <Text style={{ fontSize: 10, marginLeft: 170 }}>[AD]</Text>
        <FlatList
          data={dummyData}
          renderItem={({ item }) => <StockItem marketStock={item} />}
          keyExtractor={(item) => item.symbol}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
