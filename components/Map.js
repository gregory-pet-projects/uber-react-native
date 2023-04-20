import MapView from "react-native-maps";

import React, { useEffect, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import MarkerComponent from "./MarkerComponent";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const mapRef = useRef();

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, bottom: 50, right: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      <MarkerComponent mapPoint={origin} title="Origin" identifier="origin" />

      <MarkerComponent
        mapPoint={destination}
        title="Destination"
        identifier="destination"
      />
    </MapView>
  );
};

export default Map;
