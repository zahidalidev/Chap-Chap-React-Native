import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Recherche from "../components/Recherche";
import VotreAdresse from "../components/VotreAdresse";
import AppButton from "../components/common/AppButton"
import Enregistrer from '../components/Enregistrer';
import Entreprise from '../components/Entreprise';
import Particulier from '../components/Particulier';

import img from "../assets/images/Rectangle2.png"
import Colors from '../config/Colors';
import Bravo from '../components/Bravo';

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

    const particulierEentreprise = (current) => {
        setCurrentComponent(current)
    }

    const entrepriseSubmit = () => {
        console.log("entrepriseSubmit")
        setCurrentComponent("bravo")
    }

    const particulierSubmit = () => {
        console.log("entrepriseSubmit")
        setCurrentComponent("bravo")
    }

    const goToParticulier = () => {
        setCurrentComponent("enregistrer")
    }

    const bravo = () => {
        console.log('bravo')
    }

    return (
        <>
            {currentComponent === 'home' ?
                <ImageBackground resizeMode="stretch" source={img} style={styles.backgroundImage}>
                    <AppButton backgroundColor={Colors.primary} handleSubmit={() => setCurrentComponent('recherche')} title="Trouver mon adresse" locIcon={true} />
                </ImageBackground> : null}

            {currentComponent == 'recherche' ?
                <Recherche handleSubmit={handleSubmitRech} /> : null
            }

            {currentComponent == 'votreAdresse' ?
                <VotreAdresse handleSubmit={enregistrer} /> : null
            }

            {currentComponent == 'enregistrer' ?
                <Enregistrer handleSubmit={particulierEentreprise} /> : null
            }

            {currentComponent == 'entreprise' ?
                <Entreprise handleBack={goToParticulier} handleSubmit={entrepriseSubmit} /> : null
            }

            {currentComponent == 'particulier' ?
                <Particulier handleBack={goToParticulier} handleSubmit={particulierSubmit} /> : null
            }

            {currentComponent == 'bravo' ?
                <Bravo handleBack={goToParticulier} handleSubmit={bravo} /> : null
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