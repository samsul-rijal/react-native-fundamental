import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <StatusBar />
      
      <Text style={style.header}>Sign In</Text>

      <Text style={style.labelText}>Email</Text>
      <TextInput style={style.textInput} placeholder="email" />

      <Text style={style.labelText}>Password</Text>
      <TextInput style={style.textInput} placeholder="password" />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>


    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  labelText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    color: 'grey',
    borderColor: 'grey'
  },
  button: {
    backgroundColor: 'orange',
    height: 45,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
})
