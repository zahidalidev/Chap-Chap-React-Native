import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

import LocaIcon from "../../assets/icons/locationTick.png"
import Colors from '../../config/Colors';
import ResSize from './ResSize';

function AppTextInput({ number = false, width = "80%", onChange, title, value }) {
    return (
        <View style={[styles.container, { width }]} >
            <Text style={styles.textStyle} >{title}</Text>
            <TextInput
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={[styles.textField, { borderBottomLeftRadius: number ? 0 : ResSize(5), borderTopLeftRadius: number ? 0 : ResSize(5) }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    textStyle: {
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(11)
    },
    textField: {
        marginTop: ResSize(5),
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: ResSize(5),
        padding: ResSize(5),
        color: Colors.grey,
        fontSize: ResSize(11),
        width: "100%",
        backgroundColor: Colors.lightGrey,
    }

})

export default AppTextInput;