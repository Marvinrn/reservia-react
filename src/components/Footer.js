import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <h4>À propos</h4>
                <ul>
                    <li>Fonctionnement du site</li>
                    <li>Conditions générales de vente</li>
                    <li>Données et confidentialité</li>
                </ul>
            </div>

            <div>
                <h4>Nos Hébergements</h4>
                <ul>
                    <li>Charte qualité</li>
                    <li>Soumettre votre hôtel</li>
                </ul>
            </div>

            <div>
                <h4>Assistance</h4>
                <ul>
                    <li>Centre d'aide</li>
                    <li>Nous contacter</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;