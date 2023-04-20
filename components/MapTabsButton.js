import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const MapTabsButton = ({ onPress, iconName, iconType, type, text }) => {
  const isMainStyle = type === "main";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`,
        { backgroundColor: isMainStyle ? "black" : "white" },
      ]}
    >
      <Icon
        name={iconName}
        type={iconType}
        color={isMainStyle ? "white" : "black"}
        size={16}
      />
      <Text style={{ color: isMainStyle ? "white" : "black" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MapTabsButton;
