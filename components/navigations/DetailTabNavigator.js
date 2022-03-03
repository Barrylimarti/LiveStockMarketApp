import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ComponentsScreen from "../../screens/ComponentsScreen";
import NewsScreen from "../../screens/NewsScreen";
import OverviewScreen from "../../screens/OverviewScreen";
import TechnicalScreen from "../../screens/TechnicalScreen";

const Tab = createMaterialTopTabNavigator();

const DetailTabNavigator = (props) => {
  const { symbol } = props;
  console.log(symbol);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: { width: 90 },
      }}
    >
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Component" component={ComponentsScreen} />
      <Tab.Screen name="Technical" component={TechnicalScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};
export default DetailTabNavigator;
