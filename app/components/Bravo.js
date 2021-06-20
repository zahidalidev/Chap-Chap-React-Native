import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker"

// components
import ResSize from './common/ResSize';
import AppButton from './common/AppButton';

// config
import Colors from '../config/Colors';
import backImage from "../assets/images/Rectangle24.png"
import icon from "../assets/icons/Vector5.png"

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

function Bravo({ handleBack, handleSubmit }) {

    return (
        <View activeOpacity={0.9} style={styles.mainContaienr} >
            <ImageBackground source={backImage} style={{ justifyContent: "space-evenly", alignItems: "center", flexDirection: "column", flex: 1, width, height: ((height / 2)) }} >
                <View style={[styles.headingContainer, { marginTop: ResSize(-20) }]} >
                    <TouchableOpacity onPress={() => handleBack()} style={{ width: "100%" }} >
                        <FontAwesome color={Colors.white} name="long-arrow-left" size={30} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ justifyContent: "center", alignItems: 'center', borderColor: "white", borderWidth: 1, width: ResSize(60), height: ResSize(60), borderRadius: ResSize(200) }} >
                        <Image source={icon} />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <View style={{ marginTop: ResSize(23), width: "100%", alignItems: "center", justifyContent: "center" }} >
                    <Text style={{ fontSize: ResSize(15), color: Colors.black, fontFamily: "Karla_700Bold" }}>BRAVO!</Text>
                    <Text style={{ marginTop: ResSize(19), fontSize: ResSize(10), color: Colors.black, fontFamily: "Karla_400Regular" }}>Vos informations ont été enregistrés!</Text>
                </View>
                <View style={{ marginTop: ResSize(40) }} >
                    <AppButton
                        gradColor={['#39BAE8', '#0000A1']}
                        width="50%"
                        backgroundColor={true}
                        title="Mes adresses"
                        handleSubmit={() => handleSubmit()}
                    />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    mainContaienr: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    headingContainer: {
        // marginTop: ResSize(25),
        marginLeft: ResSize(15),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },

    icon: {
        position: "absolute",
        right: ResSize(10),
        bottom: -ResSize(6),
        width: "200%"
    },

})

export default Bravo;