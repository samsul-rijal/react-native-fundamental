import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function getBatch() {
    return "Batch 30"
  }

  // Create a variable Here
  const companyName = "Dumbways.id"

  return (
    <View>
      <StatusBar />
      <Text>
        Welcome to {companyName} class {getBatch()}
      </Text>
    </View>
  );
}
