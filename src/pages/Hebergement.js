import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';


/* OBJECTIFS POUR LA PAGE HÉBERGMENT

    - Afficher une liste d'hôtels et faire un filtre qui affiche les hôtels d'une ville précise (faire environs 5 hôtels minimum par villes Paris, Strasbourg, Lyon, Lille etc etc)
    
    - Faire en sorte de pouvoir les classer par prix du moins cher au plus cher et inversement.

*/


const Hebergement = () => {
    return (
        <div>
            <Logo />
            <Navigation />
        </div>
    );
};

export default Hebergement;