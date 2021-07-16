import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer'
import '../styles/Inscription.css'


/* OBJECTIF POUR LA PAGE INSCRIPTION

    - Faire un formulaire d'inscription qui se valide uniquement lorsque les bonnes données sont renseignées
    
    - Faire un formulaire de connexion à coté qui se valide lorsque les bonnes données sont renseignées, et faire en sorte d'avoir quelque chose qui montre que l'on est bien connecté lorsque c'est fait (si cela est faisable)

*/

const Inscription = () => {

    return (
        <div>
            <div className="inscriptionBlocPage">
                <Logo />
                <Navigation />
                <div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Inscription;