import React from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import '../styles/Home.css'
import HostingAside from '../components/HostingAside';
import HomeActivities from '../components/HomeActivities';
import Footer from '../components/Footer';




function Home() {

    const [inputValue, setInputValue] = useState('')

    function handleInpute(e) {
        setInputValue(e.target.value)
    }


    return (
        <div>
            <div className="blocPage">
                <Logo />
                <Navigation />
                <section>
                    <h1>Trouver votre hébergement pour des vacances de rêve</h1>
                    <p>En plein centre ville ou en pleine nature</p>
                    <form method="post" acton="" className="formulaire" >
                        <button className="localisation"><i className="fas fa-map-marker-alt"></i></button>
                        <input
                            type="text"
                            value={inputValue}
                            placeholder="  Entrez un nom de ville"
                            onChange={handleInpute}>
                        </input>
                        <button className="searchBtn"><span>Rechercher</span> </button>
                    </form>
                </section>
                <HostingAside />
                <HomeActivities />
            </div>
            <Footer />
        </div>
    );
};

export default Home;