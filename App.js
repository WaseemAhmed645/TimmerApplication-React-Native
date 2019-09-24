import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Timers from "./Screen/Timers";
import Splash from "./Screen/Splash";
const App = () => {
  return <AppContainer />;
};

const StackNavigator = createStackNavigator(
  {
    Splash: Splash,
    Timers: Timers
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerMode: "none"
    }
  }
);
const AppContainer = createAppContainer(StackNavigator);
const styles = StyleSheet.create({
  engine: {
    position: "absolute",
    right: 0
  }
});

export default App;
