import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

/* OBJECTIF POUR LA PAGE ACTIVITÉS

IDÉE 1 : Pour cette page faire en sorte d'avoir un input dans lequel on peut chercher une activité parmis une liste et faire en sorte que ca nous affiche l'activité correspondante plus faire un bouton qui affiche une map pour trouver une ville (activités ne seront pas disponible sur la carte )

IDÉE 2 :  - Afficher une liste d'activités génériques et lorsque l'on clique sur cette activité cela affiche un ou plusieurs hotel proche d'un lieu correspondant à cette activité.
          - Faire un bouton qui affiche une map pour trouver une ville (activités ne seront pas disponible sur la carte)

*/

const Activites = () => {
    return (
        <div>
            <Logo />
            <Navigation />
        </div>
    );
};

export default Activites;