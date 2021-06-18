import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import LocaIcon from "../../assets/icons/locationTick.png"
import Colors from '../../config/Colors';
import ResSize from './ResSize';

function AppButton(props) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={{ borderRadius: 10, flexDirection: "row", width: ResSize(160), backgroundColor: Colors.primary, height: ResSize(28) }} >
            <View style={{ borderRadius: 10, flexDirection: "row", width: "100%", backgroundColor: Colors.primary, height: ResSize(28), justifyContent: "center", alignItems: "center" }} >
                <Image source={LocaIcon} height={RFPercentage(5.5)} />
                <Text style={{ fontFamily: "Karla_700Bold", marginLeft: 10, fontSize: RFPercentage(2.9), color: Colors.white }} >Trouver mon adresse</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppButton;