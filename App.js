import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, MapScreen } from "./screens";
import { renderScreens } from "./service/utils";
import { KeyboardAvoidingView, Platform } from "react-native";

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
  const isIOS = Platform.OS === "ios";
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={isIOS ? "padding" : "height"}
          keyboardVerticalOffset={isIOS ? -64 : 0}
          style={{ flex: 1 }}
        >
          <SafeAreaProvider>
            <Stack.Navigator>{renderScreens(Stack, screens)}</Stack.Navigator>
          </SafeAreaProvider>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}
