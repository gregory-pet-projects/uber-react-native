import React from "react";
import { Marker } from "react-native-maps";

const MarkerComponent = ({ mapPoint, title, identifier }) => {
  const { location, description } = mapPoint || {};
  if (!location) return null;

  return (
    <Marker
      coordinate={{
        latitude: location?.lat,
        longitude: location?.lng,
      }}
      title={title}
      description={description}
      identifier={identifier}
    />
  );
};

export default MarkerComponent;
