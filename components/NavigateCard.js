import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import GooglePlacesComponent from "./GooglePlacesComponent";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import MapTabsButton from "./MapTabsButton";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onDestinationSearchPressHandler = (data, details = null) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
    navigation.navigate("RideOptionsCard");
  };
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <Text style={tw`text-center py-5 text-lg`}>Good morning</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
          <GooglePlacesComponent
            onPress={onDestinationSearchPressHandler}
            placeholder="Where To?"
            styles={toInputBoxStyles}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <MapTabsButton
          onPress={() => navigation.navigate("RideOptionsCard")}
          iconName="car"
          iconType="font-awesome"
          type="main"
          text="Rides"
        />

        <MapTabsButton
          onPress={() => undefined}
          iconName="fast-food-outline"
          iconType="ionicon"
          text="Eats"
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: { backgroundColor: "#DDDDDF", borderRadius: 0, fontSize: 18 },
  textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});
