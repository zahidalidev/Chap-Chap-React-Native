import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

import LocaIcon from "../../assets/icons/locationTick.png"
import Colors from '../../config/Colors';
import ResSize from './ResSize';

function AppButton({ gradColor = ['#0000A1', '#39BAE8'], font = "bold", backgroundColor = null, locIcon = false, width = ResSize(160), height = ResSize(28), title, handleSubmit, borderRadius = 10, fontSize = RFPercentage(2.9) }) {
    return (
        <TouchableOpacity style={{ width }} onPress={() => handleSubmit()} activeOpacity={0.7} >
            <LinearGradient colors={gradColor} start={[0.1, 0.7]} end={[1, 0.2]} style={{ borderRadius, flexDirection: "row", height }} >
                <View style={[{ backgroundColor: backgroundColor ? backgroundColor : null, height }, styles.container]} >
                    {
                        locIcon ? <Image source={LocaIcon} height={RFPercentage(5.5)} /> : null
                    }
                    <Text style={[{ fontFamily: font === "bold" ? "Karla_700Bold" : "Karla_400Regular", fontSize, color: Colors.white }, styles.textStyle]} >{title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        marginLeft: 10
    }

})

export default AppButton;