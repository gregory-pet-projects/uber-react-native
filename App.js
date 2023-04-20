import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, MapScreen } from "./screens";
import { renderScreens } from "./service/utils";

const screens = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    options: { headerShown: false },
  },
  {
    name: "MapScreen",
    component: MapScreen,
    options: { headerShown: false },
  },
];

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>{renderScreens(Stack, screens)}</Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
