import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import ResSize from '../components/common/ResSize';
import Colors from '../config/Colors';
import { useState } from 'react';

function AdressesScreen(props) {

    const [data, setData] = useState([
        {
            title: "Domicile"
        },
        {
            title: "Travail"
        },
        {
            title: "Salle de Gym"
        },
        {
            title: "Supermarché"
        },
        {
            title: "Bar La rotonde"
        },
    ])

    return (
        <View style={styles.container}>
            <View style={{ marginTop: ResSize(25) }} >
                <Text style={{ fontFamily: "Karla_700Bold", fontSize: ResSize(15) }} >Mes adresses</Text>
            </View>
            <ScrollView style={{ width: "90%" }} >
                {
                    data.map((item, index) =>
                        <View key={index} style={{ marginTop: ResSize(25), flex: 1, width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }} >
                            <MaterialCommunityIcons color={Colors.grey} name="chevron-right" size={ResSize(13)} />
                            <Text style={{ fontFamily: "Karla_400Regular", fontSize: ResSize(11) }} >{item.title}</Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    }
})

export default AdressesScreen;