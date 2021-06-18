import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import LocaIcon from "../../assets/icons/locationTick.png"
import Colors from '../../config/Colors';
import ResSize from './ResSize';

function AppButton({ locIcon = false, width = ResSize(160), height = ResSize(28), title, handleSubmit, borderRadius = 10, fontSize = RFPercentage(2.9), backgroundColor = Colors.primary }) {
    return (
        <TouchableOpacity onPress={() => handleSubmit()} activeOpacity={0.7} style={{ borderRadius, flexDirection: "row", width, backgroundColor, height }} >
            <View style={[{ backgroundColor, height }, styles.container]} >
                {
                    locIcon ? <Image source={LocaIcon} height={RFPercentage(5.5)} /> : null
                }
                <Text style={[{ fontSize, color: Colors.white }, styles.textStyle]} >{title}</Text>
            </View>
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
        fontFamily: "Karla_700Bold",
        marginLeft: 10
    }

})

export default AppButton;