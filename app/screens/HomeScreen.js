import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Recherche from "../components/Recherche";
import VotreAdresse from "../components/VotreAdresse";
import AppButton from "../components/common/AppButton"
import Enregistrer from '../components/Enregistrer';

import img from "../assets/images/Rectangle2.png"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomeScreen(props) {
    const [currentComponent, setCurrentComponent] = useState('home')

    const handleSubmitRech = () => {
        setCurrentComponent('votreAdresse')
    }

    const enregistrer = () => {
        setCurrentComponent('enregistrer')
    }

    return (
        <>
            {currentComponent === 'home' ?
                <ImageBackground resizeMode="stretch" source={img} style={styles.backgroundImage}>
                    <AppButton backgroundColor={true} handleSubmit={() => setCurrentComponent('recherche')} title="Trouver mon adresse" locIcon={true} />
                </ImageBackground> : null}

            {currentComponent == 'recherche' ?
                <Recherche handleSubmit={handleSubmitRech} /> : null
            }

            {currentComponent == 'votreAdresse' ?
                <VotreAdresse handleSubmit={enregistrer} /> : null
            }

            {currentComponent == 'enregistrer' ?
                <Enregistrer /> : null
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