import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import '../styles/Home.css'
import HostingAside from '../components/HostingAside';
import HomeActivities from '../components/HomeActivities';
import Footer from '../components/Footer';
import SearchInput from '../components/SearchInput';




function Home() {
    return (
        <div>
            <div className="blocPage">
                <Logo />
                <Navigation />
                <SearchInput />
                <HostingAside />
                <HomeActivities />
            </div>
            <Footer />
        </div>
    );
};

export default Home;