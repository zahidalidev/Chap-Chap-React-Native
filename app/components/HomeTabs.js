import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

// Screens
import HomeScreen from '../screens/HomeScreen';

// Config
import Colors from '../config/Colors';

const Tab = createBottomTabNavigator()

const HomeTab = () => (
    <Tab.Navigator initialRouteName="Home"
        tabBarOptions={{
            style: { height: RFPercentage(7.5) },
            labelStyle: { fontSize: 0 },
            tabStyle: { backgroundColor: Colors.primary },
            activeTintColor: Colors.secondary, inactiveTintColor: Colors.white
        }}
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
                <Feather
                    name="home"
                    color={color}
                    size={RFPercentage(3.3)}
                />
            ),
        }}
        />
        <Tab.Screen name="Search" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
                <MaterialIcons
                    name="alternate-email"
                    color={color}
                    size={RFPercentage(3.3)}
                />
            ),
        }}
        />
        <Tab.Screen name="CreateRecipe" component={HomeScreen} options={{
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

export default HomeTab;