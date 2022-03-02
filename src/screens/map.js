import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const cars = ['Avanza', 'Ayla', 'Brio', 'Jazz']

  return (
    <View>
      <StatusBar />
      
      {cars.map((item) => (
        <Text key={item}>{item}</Text>
      ))}

    </View>
  );
}
