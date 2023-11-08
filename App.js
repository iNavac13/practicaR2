import { View, Text } from "react-native";
import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import LoginView from "./src/LoginView";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginView} title="Login" initial={true} />
        {/* <Scene key="home" component={Home} title="Home" /> */}
      </Scene>
    </Router>
  );
};

export default App;
