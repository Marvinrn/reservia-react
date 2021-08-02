import React, {useState} from 'react';

const SearchInput = () => {
    const [homeInputValue, setHomeInputValue] = useState('')

    function homeHandleInput(e) {
        setHomeInputValue(e.target.value)
    }
    console.log(homeInputValue);
    return (
        <div>
            <section>
                    <h1>Trouver votre hébergement pour des vacances de rêve</h1>
                    <p>En plein centre ville ou en pleine nature</p>
                    <form method="post" acton="" className="formulaire" >
                        <button className="localisation" disabled><i className="fas fa-map-marker-alt"></i></button>
                        <input
                            type="text"
                            value={homeInputValue}
                            placeholder="Entrez un nom de ville"
                            onChange={homeHandleInput}>
                        </input>
                        <button type="button" className="searchBtn"><span>Rechercher</span> </button>
                    </form>
                </section>
        </div>
    );
};

export default SearchInput;