import React from 'react';
import { LogBox, Dimensions } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from "react-native-responsive-fontsize";

// Colors
import HomeScreen from './app/screens/HomeScreen';

// config
import Colors from './app/config/Colors';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {


  const HomeTab = ({ navigation }) => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
      style: { height: RFPercentage(7.5) },
      labelStyle: { fontSize: 0 },
      tabStyle: { backgroundColor: Colors.primary },
      activeTintColor: Colors.secondary, inactiveTintColor: Colors.white
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="home"
              color={color}
              size={RFPercentage(3.3)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="alternate-email"
              color={color}
              size={RFPercentage(3.3)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreateRecipe"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={RFPercentage(3.3)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeTabs" >
        <Stack.Screen name="HomeTabs" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


