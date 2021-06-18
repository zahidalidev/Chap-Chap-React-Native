import React from 'react';
import { LogBox, Dimensions } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import HomeTab from './app/components/HomeTabs';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeTabs" >
        <Stack.Screen name="HomeTabs" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


