import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Map } from "../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const screens = [];

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
