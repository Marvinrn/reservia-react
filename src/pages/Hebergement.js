import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer'
import MainHosting from '../components/MainHosting';


/* OBJECTIFS POUR LA PAGE HÉBERGMENT

    - Afficher une liste d'hôtels et faire un filtre qui affiche les hôtels d'une ville précise (faire environs 5 hôtels minimum par villes Paris, Strasbourg, Lyon, Lille etc etc)
    
    - Faire en sorte de pouvoir les classer par prix du moins cher au plus cher et inversement.

    (je fais comme ca car je n'arrive pas à trouver une API d'hotel gratuite qui me convient)

*/


const Hebergement = () => {
    return (
        <div>
            <div className="hostingPage">
                <Logo />
                <Navigation />
                <MainHosting />
            </div>
            <Footer />
        </div>
    );
};

export default Hebergement;