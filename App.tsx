import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import Recuper from "./screens/Recuper";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ headerShown: true, title: "Detalhes" }}
          />
           <Stack.Screen
            name="Recuper"
            component={Recuper}
            options={{ headerShown: true, title: "Recuper" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
