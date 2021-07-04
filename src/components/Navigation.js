import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

const Navigation = () => {
    return (
        <header className="banner" >
            <NavLink exact to="/" activeClassName="nav-active"> Accueil </NavLink>
            <NavLink exact to="/Hébergements" activeClassName="nav-active"> hébergements </NavLink>
            <NavLink exact to="/activités" activeClassName="nav-active"> activités </NavLink>
            <NavLink exact to="/inscription" activeClassName="nav-active"> S'inscrire </NavLink>
        </header>
    );
};

export default Navigation;