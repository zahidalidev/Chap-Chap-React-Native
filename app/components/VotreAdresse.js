import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome5, Feather } from "@expo/vector-icons"

import Colors from '../config/Colors';
import ResSize from './common/ResSize';

function VotreAdresse({ handleSubmit }) {
    return (
        <View activeOpacity={0.9} style={styles.mainButton} >
            <Text style={styles.heading} >Votre adresse est</Text>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#0000A1', '#39BAE8']}
                    style={styles.box}
                    start={[0.1, 0.7]}
                    end={[1, 0.2]}
                >
                    <Text style={styles.boxHeading} >VFX3TSJ</Text>
                    <Text style={styles.subHedaing} >Courbevoie</Text>
                </LinearGradient>

                <View style={styles.bottomContainer} >
                    <TouchableOpacity style={styles.bottomRow} >
                        <FontAwesome5 color={Colors.primary} size={ResSize(15)} name="copy" />
                        <Text style={styles.rowName} >Copier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomRow} >
                        <MaterialCommunityIcons color={Colors.primary} size={ResSize(15)} name="share-variant" />
                        <Text style={styles.rowName} >Partager</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSubmit()} style={styles.bottomRow} >
                        <Feather color={Colors.primary} size={ResSize(15)} name="download" />
                        <Text style={styles.rowName} >Enregistrer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainButton: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: Colors.black,
        height: "10%",
        fontSize: ResSize(19),
        marginTop: ResSize(30),
        fontFamily: "Karla_700Bold"
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: ResSize(-50)
    },
    box: {
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: ResSize(5),
        width: ResSize(130),
        height: ResSize(50),

    },
    boxHeading: {
        color: Colors.white,
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(16),
    },
    subHedaing: {
        color: Colors.white,
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(12),
    },
    bottomContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        marginTop: ResSize(-70)
    },
    bottomRow: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: ResSize(10)
    },
    rowName: {
        color: Colors.black,
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(11),
        marginLeft: ResSize(5)
    },
})

export default VotreAdresse;