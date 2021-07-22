import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer'
import '../styles/Login.css'

const LoginPage = () => {
    return (
        <div>
            <div className="loginBlocPage">
                <Logo />
                <Navigation />
                <div className="login">
                    <form className="registrationForm" >
                        <label>Adresse mail</label>
                        <input
                            type="email"
                            placeholder="  Entrez votre mail"
                        />
                    </form>

                    <form className="registrationForm" >
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="  Entrez votre mot de passe"
                        />
                    </form>
                    <div><button className='registrationBtn'>Continuer</button></div>
                    <a href="/inscription" className="loginLink" > S'inscrire </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;