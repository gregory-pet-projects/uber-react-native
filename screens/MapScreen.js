import { TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Map, NavigateCard, RideOptionsCard } from "../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { renderScreens } from "../service/utils";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute top-16 right-8 bg-gray-100 p-3 rounded-full z-50`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
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
