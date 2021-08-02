import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

//Menu de Navigation entre les differentes pages du site

const Navigation = () => {
    return (
        <header className="banner" >
            <NavLink exact to="/" activeClassName="nav-active"> Accueil </NavLink>
            <NavLink exact to="/Hébergements" activeClassName="nav-active"> Hébergements </NavLink>
            <NavLink exact to="/inscription" activeClassName="nav-active"> S'inscrire </NavLink>
            <NavLink exact to="/login" />
        </header>
    );
};

export default Navigation;