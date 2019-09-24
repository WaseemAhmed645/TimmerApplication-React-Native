import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Animated,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Timers");
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../img/Timer.jpeg")}
          style={{ flex: 1 }}
          blurRadius={1}
        >
          <Animatable.View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            animation="bounceIn"
            iterationCount={1}
          >
            <View
              style={{
                height: 40,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
            >
              {/* <Image
                source={require("../img/icon.png")}
                style={{ width: 100, height: 100 }}
              /> */}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                  fontStyle: "italic"
                }}
              >
                Timer App
              </Text>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});
