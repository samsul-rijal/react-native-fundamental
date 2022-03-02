import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import Form from "./src/screens/form";

export default function App() {
  return (
    <View>
      <StatusBar />
      <Form />
    </View>
  );
}
