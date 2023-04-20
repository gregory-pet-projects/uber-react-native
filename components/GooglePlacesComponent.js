import React from "react";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesComponent = ({ styles, placeholder, onPress }) => (
  <GooglePlacesAutocomplete
    styles={styles}
    placeholder={placeholder}
    debounce={400}
    query={{
      key: GOOGLE_MAPS_API_KEY,
      language: "en",
    }}
    nearbyPlacesAPI={"GooglePlacesSearch"}
    enablePoweredByContainer={false}
    fetchDetails={true}
    returnKeyType={"search"}
    minLength={2}
    onPress={onPress}
  />
);

export default GooglePlacesComponent;
