import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import React from "react";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const latitude = origin?.location?.lat;
  const longitude = origin?.location?.lng;
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
