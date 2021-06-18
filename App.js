import React from 'react';
import { LogBox, ActivityIndicator, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Karla_400Regular, Karla_700Bold, useFonts } from "@expo-google-fonts/karla"

// components
import HomeTab from './app/components/HomeTabs';

import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from './app/config/Colors';

const Stack = createStackNavigator()

export default function App() {

  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  });


  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeTabs" >
        <Stack.Screen name="HomeTabs" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


