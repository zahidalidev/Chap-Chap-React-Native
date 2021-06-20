import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../config/Colors';
import ResSize from './common/ResSize';
import AppButton from './common/AppButton';

function Enregistrer({ handleSubmit }) {
    return (
        <View onPress={() => handleSubmit()} activeOpacity={0.9} style={styles.mainButton} >
            <Text style={styles.heading} >Enregistrer votre adresse</Text>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.subHeading} >Vous êtes</Text>
                    <AppButton
                        handleSubmit={() => handleSubmit("particulier")}
                        width={ResSize(100)}
                        height={ResSize(25)}
                        title="Une entreprise"
                        font="regular"
                    />

                    <AppButton
                        handleSubmit={() => handleSubmit("entreprise")}
                        width={ResSize(100)}
                        height={ResSize(25)}
                        title="Un particulier"
                        font="regular"
                        gradColor={['#39BAE8', '#0000A1']}
                    />
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
        width: "70%",
        textAlign: "center",
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
    subContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        maxHeight: "50%"
    },
    subHeading: {
        color: Colors.black,
        fontFamily: "Karla_700Bold",
        fontSize: ResSize(13),
    }
})

export default Enregistrer;