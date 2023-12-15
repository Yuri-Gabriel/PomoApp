/* eslint-disable prettier/prettier */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SetTimer from "./Screens/SetTimer";
import Contador from "./Screens/Contador";
import StartScreen from "./Screens/StartScreen";
import Colors from "./Screens/Colors";
import Profile from "./Screens/Profile";

import { RootStackParamList } from './Screens/types';


//npx expo start

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen
          name="SetTimer"
          component={SetTimer}
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
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
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