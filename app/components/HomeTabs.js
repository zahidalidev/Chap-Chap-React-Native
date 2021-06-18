import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

// Screens
import HomeScreen from '../screens/HomeScreen';

// Config
import Colors from '../config/Colors';
import ResSize from './common/ResSize';

const Tab = createBottomTabNavigator()

const HomeTab = () => (
    <Tab.Navigator initialRouteName="Home"
        tabBarOptions={{
            showLabel: false,
            style: { height: RFPercentage(7.5) },
            tabStyle: { backgroundColor: Colors.primary },
            activeTintColor: Colors.secondary, inactiveTintColor: Colors.white
        }}
    >
        <Tab.Screen name="Home" options={{ header: () => null }} component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
                <Feather
                    name="home"
                    color={color}
                    size={ResSize(13)}
                />
            ),
        }}
        />
        <Tab.Screen name="Search" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
                <MaterialIcons
                    name="alternate-email"
                    color={color}
                    size={ResSize(13)}
                />
            ),
        }}
        />
        <Tab.Screen name="CreateRecipe" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
                <Ionicons
                    name="person-circle-outline"
                    color={color}
                    size={ResSize(13)}
                />
            ),
        }}
        />
    </Tab.Navigator>
)

export default HomeTab;