import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../config/Colors';
import ResSize from './common/ResSize';

function Recherche({ handleSubmit }) {
    return (
        <TouchableOpacity onPress={() => handleSubmit()} activeOpacity={0.9} style={styles.mainButton} >
            <Text style={styles.heading} >Recherche</Text>
            <View style={styles.container}>
                <View style={styles.mainCircle} >
                    <View style={styles.innerCircle3} >
                        <View style={styles.innerCircle2} >
                            <View style={styles.innerCircle1} >
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainButton: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: Colors.white,
        height: "10%",
        fontSize: ResSize(19),
        marginTop: ResSize(30),
        fontFamily: "Karla_700Bold"
    },
    container: {
        flex: 1,
        marginTop: ResSize(-50),
        justifyContent: "center",
        alignItems: "center",
    },
    mainCircle: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: ResSize(200),
        width: ResSize(230),
        height: ResSize(230),
        borderWidth: 8,
        borderColor: "rgba(220, 220, 220, 0.17)"
    },
    innerCircle3: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: ResSize(200),
        width: ResSize(170),
        height: ResSize(170),
        borderWidth: 13,
        borderColor: "rgba(255, 255, 255, 0.39)"
    },
    innerCircle2: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: ResSize(200),
        width: ResSize(100),
        height: ResSize(100),
        borderWidth: 40,
        borderColor: "rgba(31, 110, 212, 0.54)"
    },
    innerCircle1: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: ResSize(200),
        backgroundColor: "#1F6ED4",
        width: ResSize(60),
        height: ResSize(60),
        borderWidth: 30,
        borderColor: "#1F6ED4"
    }
})

export default Recherche;