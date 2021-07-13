import React from 'react';
import '../styles/Filters.css'

const Filters = () => {

    return (

        <nav>
            <ul className='filters'>
            <li><i className="fas fa-money-bill-wave"></i><strong>Économique</strong></li>
            <li><i className="fas fa-child"></i><strong>Familial</strong></li>
            <li><i className="fas fa-heart"></i><strong>Romantique</strong></li>
            <li><i className="fas fa-dog"></i><strong>Animaux autorisés</strong></li>
            </ul>
        </nav>
    );
};

export default Filters;