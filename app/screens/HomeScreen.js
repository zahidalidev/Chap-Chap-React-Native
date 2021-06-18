import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import AppButton from "../components/common/AppButton"

import img from "../assets/images/Rectangle2.png"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomeScreen(props) {

    const handleSubmit = () => {
        console.log('clicked')
    }
    return (
        <ImageBackground resizeMode="stretch" source={img} style={styles.backgroundImage}>
            <AppButton handleSubmit={() => handleSubmit()} title="Trouver mon adresse" locIcon={true} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height,
        width,
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen;