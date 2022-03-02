import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import List from "../components/list";

export default function Props() {
  // Create variable to insert link Image
  
  return (
    <View>
      <StatusBar />
      <List listData="Avanza" />
      <List listData="Ayla" />
      <List listData="Brio" />
    </View>
  );
}
