import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableOpacity  } from "react-native";

export default function Event() {
  // Create Function Here
  function Greeting() {
    return alert("Good Morning guys")
  }

  return (
    <View>
      <StatusBar />
      
      <TouchableOpacity onPress={Greeting}>
        Greeting
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("Hello Batch 30")}>
        Click here
      </TouchableOpacity>


    </View>
  );
}
