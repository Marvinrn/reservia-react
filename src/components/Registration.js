import React from 'react';
import '../styles/Registration.css'


const Registration = () => {
    return (
        <div className="registration">
            <form className="registrationForm" >
                <label>Nom</label>
                <input
                    placeholder="Entrez votre nom"
                />
            </form>

            <form className="registrationForm" >
                <label>Prénom</label>
                <input
                    placeholder="Entrez votre prénom"
                />
            </form>

            <form className="registrationForm" >
                <label>Adresse mail</label>
                <input
                    type="email"
                    placeholder="Entrez votre mail"
                />
            </form>

            <form className="registrationForm" >
                <label>Numéro de téléphone</label>
                <input
                    placeholder="Entrez votre numéro"
                />
            </form>

            <form className="registrationForm" >
                <label>Mot de passe</label>
                <input
                    type="password"
                    placeholder="Entrez votre mot de passe"
                />
            </form>

            <form className="registrationForm" >
                <label>Confirmer mot de passe</label>
                <input
                    type="password"
                    placeholder="Entrez votre mot de passe"
                />
            </form>

            <div><button className='registrationBtn'>Continuer</button></div>
            <a href="/Login" className="registrationLink" >Déja inscrit? </a>
        </div>
    );
};

export default Registration;