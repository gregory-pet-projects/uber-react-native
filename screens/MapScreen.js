import { View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Map, NavigateCard, RideOptionsCard } from "../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { renderScreens } from "../service/utils";
const screens = [
  {
    name: "NavigateCard",
    component: NavigateCard,
    options: { headerShown: false },
  },
  {
    name: "RideOptionsCard",
    component: RideOptionsCard,
    options: { headerShown: false },
  },
];

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>{renderScreens(Stack, screens)}</Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
