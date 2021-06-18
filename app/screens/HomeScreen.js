import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';

import img from "../assets/images/Rectangle2.png"
import LocaIcon from "../assets/icons/locationTick.png"

import Colors from '../config/Colors';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomeScreen(props) {
    return (
        <ImageBackground resizeMode="stretch" source={img} style={styles.backgroundImage}>
            <Button style={{ flexDirection: "row", width: RFPercentage(34), backgroundColor: Colors.primary, height: RFPercentage(7.25), justifyContent: "center", alignItems: "center" }} >
                <Image source={LocaIcon} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: "Karla_400Regular", marginLeft: 10, fontSize: RFPercentage(2.2), color: Colors.white }} >Trouver mon adresse</Text>
            </Button>
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