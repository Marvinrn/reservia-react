import React from 'react';
import '../styles/Logo.css'
import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <div className="logoBar">
            <img className="logoReservia banner" src={logo} alt='logo'/>
        </div>
    );
};

export default Logo;