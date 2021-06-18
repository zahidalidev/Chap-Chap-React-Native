import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import Constants from 'expo-constants';

import ResSize from '../components/common/ResSize';
import Colors from '../config/Colors';
import AppButton from '../components/common/AppButton';
import { RFPercentage } from 'react-native-responsive-fontsize';

function ProfileScreen(props) {

    const [fields, setFields] = useState([
        {
            title: "Nom",
            value: ''
        },
        {
            title: "Prénom",
            value: ''
        },
        {
            title: "Numéro",
            value: ''
        },
        {
            title: "Ville",
            value: ''
        },
        {
            title: "Pays",
            value: ''
        },
    ])
    const handleFields = (value, index) => {
        const tempField = [...fields];
        tempField[index].value = value;
        setFields(tempField)
    }

    const handleSuprimer = () => {
        console.log('clicked')
    }

    const handleSauvegarder = () => {
        console.log('clicked')
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: ResSize(25) }} >
                <Text style={styles.heading} >Modifier mon profil</Text>
            </View>

            {/* Fields */}
            <ScrollView style={styles.scroll} >
                {
                    fields.map((item, index) =>
                        <View key={index} style={styles.inputContainer} >
                            <TextInput
                                placeholder={item.title}
                                placeholderTextColor={Colors.black}
                                style={styles.inputField}
                                value={item.value}
                                onChange={(e) => handleFields(e.target.value, index)}
                            />
                        </View>
                    )
                }

            </ScrollView>
            {/* Buttons */}
            <View style={styles.buttonContainer} >
                <AppButton handleSubmit={() => handleSauvegarder()} title="Sauvegarder" fontSize={RFPercentage(2.4)} width={"45%"} height={ResSize(22)} />
                <AppButton handleSubmit={() => handleSuprimer()} title="Suprimer" fontSize={RFPercentage(2.4)} backgroundColor={Colors.secondaryDark} width={"45%"} height={ResSize(22)} />
            </View>
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
    heading: {
        fontFamily: "Karla_700Bold",
        fontSize: ResSize(15)
    },
    scroll: {
        width: "85%"
    },
    inputContainer: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: 0.6,
        marginTop: ResSize(25),
        flex: 1,
        width: "80%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputField: {
        width: "100%",
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(12)
    },
    buttonContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: ResSize(20)
    },
})

export default ProfileScreen;