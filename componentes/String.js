import React from "react";
import { View, Text } from "react-native";

export default function String() {
  const mensaje = "Hola desde React Native 👋";

  return (
    <View>
      <Text>{mensaje}</Text>
    </View>
  );
}
