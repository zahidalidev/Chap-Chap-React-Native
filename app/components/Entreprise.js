import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker"

// components
import ResSize from './common/ResSize';
import AppTextInput from './common/AppTextInput';
import AppButton from './common/AppButton';

// config
import Colors from '../config/Colors';

function Entreprise({ handleSubmit, handleBack }) {
    const [selectedCode, setCode] = useState('')
    const [formFields, setFormFields] = useState([
        {
            id: 1,
            title: "Nom de l’adresse",
            value: ""
        },
        {
            id: 2,
            title: "Nom de l’entreprise",
            value: ""
        },
        {
            id: 3,
            title: "Ville",
            value: ""
        },
        {
            id: 4,
            title: "Pays",
            value: ""
        },
        {
            id: 5,
            title: "Contact Tel",
            value: "05 00 00 00 00"
        },
        {
            id: 6,
            title: "Adresse",
            value: "Carrefour Agbemadon"
        },
    ])


    // country codes here
    const countryCodes = [
        { label: "+228", value: "+228" },
        { label: "+229", value: "+229" },
        { label: "+230", value: "+230" },
        { label: "+231", value: "+231" },
        { label: "+232", value: "+232" },
        { label: "+233", value: "+233" },
        { label: "+234", value: "+234" },
        { label: "+235", value: "+235" },
        { label: "+236", value: "+236" },
    ]

    // picker icon
    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"white"}
            style={styles.icon}
        />
    }


    const handleChange = (index, value) => {
        let tempFormFields = [...formFields];
        tempFormFields[index].value = value;
        setFormFields(tempFormFields)
    }

    return (
        <View activeOpacity={0.9} style={styles.mainContaienr} >
            <View style={styles.headingContainer} >
                <TouchableOpacity onPress={() => handleBack()} style={{ width: "35%" }} >
                    <FontAwesome name="long-arrow-left" size={30} />
                </TouchableOpacity>
                <Text style={styles.heading} >Entreprise</Text>
            </View>
            <ScrollView style={{ width: "100%" }} >
                <View style={styles.container}>
                    <View style={styles.field0} >
                        <AppTextInput
                            title={formFields[0].title}
                            value={formFields[0].value}
                            onChange={(value) => handleChange(0, value)}
                        />
                    </View>
                    <View style={styles.field2} >
                        <AppTextInput
                            title={formFields[1].title}
                            value={formFields[1].value}
                            onChange={(value) => handleChange(0, value)}
                        />
                    </View>
                    <View style={styles.field1} >
                        <AppTextInput
                            title={formFields[2].title}
                            width="35%"
                            value={formFields[2].value}
                            onChange={(value) => handleChange(1, value)}
                        />
                        <AppTextInput
                            title={formFields[3].title}
                            width="35%"
                            value={formFields[3].value}
                            onChange={(value) => handleChange(2, value)}
                        />
                    </View>
                    <View style={styles.numberContainer} >
                        <Text style={styles.textStyle} >{formFields[4].title}</Text>
                        <View style={styles.numberSubContainer}  >
                            <ReactNativeCrossPicker
                                width="30%"
                                modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                                mainComponentStyle={styles.pickerStyle}
                                iconComponent={iconComponent}
                                items={countryCodes}
                                setItem={setCode}
                                selectedItem={selectedCode}
                                placeholder="+228"
                                placeholderColor="white"
                                modalMarginTop={"50%"} // popup model margin from the top 
                            />
                            <AppTextInput
                                number={true}
                                width="70%"
                                value={formFields[4].value}
                                onChange={(value) => handleChange(3, value)}
                            />
                        </View>
                    </View>
                    <View style={styles.field2} >
                        <AppTextInput
                            title={formFields[5].title}
                            value={formFields[5].value}
                            onChange={(value) => handleChange(4, value)}
                        />
                    </View>
                    <View style={styles.buttonContaienr} >
                        <AppButton
                            width="50%"
                            backgroundColor={true}
                            title="Enregistrer"
                            handleSubmit={() => handleSubmit()}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContaienr: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    headingContainer: {
        marginTop: ResSize(30),
        flexDirection: "row",
        width: "90%",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    heading: {
        color: Colors.black,
        fontSize: ResSize(19),
        fontFamily: "Karla_700Bold",
        width: "65%",
        textAlign: "left"
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
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
    },
    field0: {
        marginTop: ResSize(20),
        width: "100%",
        alignItems: "center"
    },
    field1: {
        marginTop: ResSize(10),
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
    },
    field2: {
        marginTop: ResSize(10),
        width: "100%",
        alignItems: "center"
    },
    pickerStyle: {
        height: ResSize(26),
        marginTop: ResSize(12),
        borderRadius: 0,
        borderTopLeftRadius: ResSize(5),
        borderBottomLeftRadius: ResSize(5),
        backgroundColor: Colors.primary,
        borderColor: "rgba(0, 74, 173, 0)"
    },
    icon: {
        position: "absolute",
        right: ResSize(10),
        bottom: -ResSize(6),
        width: "200%"
    },
    numberContainer: {
        flexDirection: "column",
        marginTop: ResSize(10),
        width: "80%",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    numberSubContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContaienr: {
        marginTop: ResSize(30),
        width: "80%",
        alignItems: "flex-end"
    },
    textStyle: {
        fontFamily: "Karla_400Regular",
        fontSize: ResSize(11)
    },
})

export default Entreprise;