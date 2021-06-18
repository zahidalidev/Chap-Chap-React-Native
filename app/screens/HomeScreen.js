import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppButton from "../components/common/AppButton"

import img from "../assets/images/Rectangle2.png"

import Colors from '../config/Colors';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomeScreen(props) {
    return (
        <ImageBackground resizeMode="stretch" source={img} style={styles.backgroundImage}>
            <AppButton />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height,
        width,
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen;