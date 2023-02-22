/* eslint-disable prettier/prettier */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Contador from "./Screens/Contador";
import Colors from "./Screens/Colors";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="Contador"
          component={Contador}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: Colors.Azul_Claro,
            },
            headerTintColor: '#FFFFFF'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;