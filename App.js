import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./screens/HomeStackScreen";
import StockDetailScreen from "./screens/StockDetailScreen";
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
