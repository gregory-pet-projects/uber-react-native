import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesComponent, NavFavorites, NavOptions } from "../components";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const onGoogleSearchPressHandler = (data, details = null) => {
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );

    dispatch(setDestination(null));
  };
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://Links.papareact.com/gzs",
          }}
        />
        <GooglePlacesComponent
          onPress={onGoogleSearchPressHandler}
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
