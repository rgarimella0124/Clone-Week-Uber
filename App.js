import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import { func } from "./src/constants";

import Stack from "./src/navigation/Stack";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Main: { screen: Stack }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </React.Fragment>
    );
  }
}
