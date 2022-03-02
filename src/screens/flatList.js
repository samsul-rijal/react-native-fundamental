import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, View, Text } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const cars = [
    {
      name: 'Avanza'
    },
    {
      name: 'Ayla'
    },
    {
      name: 'Brio'
    },
    {
      name: 'Jazz'
    },
  ]


  return (
    <View>
      <StatusBar />

      <FlatList
        data={cars}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
      
    </View>
  );
}
