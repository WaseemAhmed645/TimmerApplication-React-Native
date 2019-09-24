import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import CountDown from "react-native-countdown-component";
import { Left, Right } from "native-base";
// import { Timer, FlipNumber } from "react-native-flip-timer";
import CircularSlider from "react-native-circular-slider";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

export default class Timers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 90000,
      resetTimer: false,
      resetStopwatch: false
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
  startStopTimer() {
    this.setState({
      isTimerStart: !this.state.isTimerStart,
      resetTimer: false
    });
  }
  resetTimer() {
    this.setState({ isTimerStart: false, resetTimer: true });
  }
  startStopStopWatch() {
    this.setState({
      isStopwatchStart: !this.state.isStopwatchStart,
      resetStopwatch: false
    });
  }
  resetStopwatch() {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
  }
  getFormattedTime(time) {
    this.currentTime = time;
  }
  // state = {
  //   play: true
  // };

  // play = () => {
  //   this.setState(({ play }) => ({ play: !play }));
  // };

  render() {
    const { play } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            marginTop: 32,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Stopwatch
            laps
            msecs
            start={this.state.isStopwatchStart}
            //To start
            reset={this.state.resetStopwatch}
            //To reset
            options={options}
            //options for the styling
            getTime={this.getFormattedTime}
          />
          <TouchableHighlight onPress={this.startStopStopWatch}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              {!this.state.isStopwatchStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetStopwatch}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>RESET</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 32,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Timer
            totalDuration={this.state.timerDuration}
            msecs
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={handleTimerComplete}
            //can call a function On finish of the time
            getTime={this.getFormattedTime}
          />
          <TouchableHighlight onPress={this.startStopTimer}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              {!this.state.isTimerStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetTimer}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>RESET</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 40,
    backgroundColor: "#333333",
    width: 120,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#cccccc"
  }
});
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: 500
//     };
//   }
//   restart = () => {
//     this.setState(
//       {
//         time: 200
//       },
//       () => {
//         // alert(this.state.time);
//       }
//     );
//     // alert("h");
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: "white" }}>
//         <ImageBackground
//           blurRadius={3}
//           style={{ height: "100%", width: "100%" }}
//           source={require("../img/Timer.jpeg")}
//         >
//           <View style={{ alignSelf: "center" }}>
//             <Text
//               style={{
//                 fontSize: 25,
//                 marginTop: 50,
//                 fontWeight: "bold",
//                 fontStyle: "italic",
//                 color: "white"
//               }}
//             >
//               Timer App
//             </Text>
//           </View>
//           <View
//             style={{
//               alignSelf: "center",
//               justifyContent: "center",
//               alignItems: "center",
//               flex: 1
//             }}
//           >
//             <CountDown
//               size={30}
//               until={this.state.time}
//               onFinish={() => alert("Finished")}
//               digitStyle={{
//                 backgroundColor: "#FFF",
//                 borderWidth: 2,
//                 //   justifyContent: "center",
//                 //   alignItems: "center",
//                 // alignSelf: "center",
//                 borderColor: "#1CC625"
//               }}
//               digitTxtStyle={{ color: "#1CC625" }}
//               timeLabelStyle={{ color: "red", fontWeight: "bold" }}
//               separatorStyle={{ color: "#1CC625" }}
//               timeToShow={["H", "M", "S"]}
//               timeLabels={{ m: null, s: null }}
//               showSeparator
//             />
//           </View>
//           <View
//             style={{ position: "absolute", bottom: 0, flexDirection: "row" }}
//           >
//             <TouchableOpacity onPress={() => this.restart()}>
//               <Left style={{ margin: 20 }}>
//                 <Icon1 name="restart" size={24} color="white" />
//               </Left>
//             </TouchableOpacity>
//             <Right style={{ margin: 20 }}>
//               <Icon name="setting" size={24} color="white" />
//             </Right>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
