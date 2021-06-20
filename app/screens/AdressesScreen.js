import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import ResSize from '../components/common/ResSize';
import Colors from '../config/Colors';
import { useState } from 'react';

function AdressesScreen(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log(props.route)
        if (props.route.params) {
            setData([
                {
                    title: "Travail"
                },
                {
                    title: "Salle de Gyme"
                },
                {
                    title: "Supermarché"
                },
                {
                    title: "Bar La rotonde"
                },
            ])
        } else {
            setData([
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
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer} >
                <Text style={styles.heading} >Mes adresses</Text>
            </View>
            <ScrollView style={styles.scroll} >
                {
                    data.map((item, index) =>
                        <View key={index} style={styles.iconTitle} >
                            <MaterialCommunityIcons color={Colors.grey} name="chevron-right" size={ResSize(13)} />
                            <Text style={styles.title} >{item.title}</Text>
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
    },
    headingContainer: {
        marginTop: ResSize(25)
    },
    heading: {
        fontFamily: "Karla_700Bold",
        fontSize: ResSize(15)
    },
    scroll: {
        width: "90%"
    },
    iconTitle: {
        marginTop: ResSize(25),
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(11)
    }
})

export default AdressesScreen;