import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Recherche from "../components/Recherche";
import VotreAdresse from "../components/VotreAdresse";
import AppButton from "../components/common/AppButton"

import img from "../assets/images/Rectangle2.png"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomeScreen(props) {
    const [currentComponent, setCurrentComponent] = useState('home')

    const handleSubmitRech = () => {
        setCurrentComponent('votreAdresse')
    }

    return (
        <>
            {currentComponent === 'home' ?
                <ImageBackground resizeMode="stretch" source={img} style={styles.backgroundImage}>
                    <AppButton handleSubmit={() => setCurrentComponent('recherche')} title="Trouver mon adresse" locIcon={true} />
                </ImageBackground> : null}

            {currentComponent == 'recherche' ?
                <Recherche handleSubmit={handleSubmitRech} /> : null
            }
            {currentComponent == 'votreAdresse' ?
                <VotreAdresse handleSubmit={handleSubmitRech} /> : null
            }
        </>
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