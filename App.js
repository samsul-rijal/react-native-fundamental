import React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
import {
  useFonts, 
  BalsamiqSans_400Regular, 
  BalsamiqSans_400Regular_Italic
} from "@expo-google-fonts/balsamiq-sans"

// Import Container
import Container from "./Container"
import AppLoading from "expo-app-loading";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic
  })

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic"
      }
    }
  }



  // Setup Theme
  const customeColor = {
    primary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  }


  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    font: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans"
    },
    config: {
      initialColorMode: 'dark',
    },
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {

    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );

  }
}
