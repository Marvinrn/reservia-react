import React, { useState } from 'react';
import { HostingList } from '../datas/HostingList';
import MainHostingItems from './MainHostingItems'
import '../styles/MainHosting.css'


function MainHosting() {
    const [visible, setVisible] = useState(6)
    const [items, setItems] = useState(HostingList)
    const [searchTerm, setSearchTerm] = useState('')
    const filtersCities = ['Paris', 'Strasbourg', 'Lyon', 'Lille', 'Marseille']
    const filtersCategories = ['Économique', 'Familial', 'Romantique', 'Animaux autorisés']

    // Note to myself: Pour le menu filtre, améliorer en faisant en sorte de s'avoir quel boutton est actif

    const searchBtnFilter = () => {
        const updateItem = HostingList.filter((val) => {
            if ( searchTerm === ''){
                return val
            } else if (  val.city.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ){
            return val
        }
        return (null)
    })
    setItems(updateItem)
}


    //function to filter by category
    const filterItem = (categItem) => {
        const updateItem = HostingList.filter((curentElem) => {
            return curentElem.category === categItem
        });
        setItems(updateItem);
    }

    //function to filter by city
    const filterCity = (cityItem) => {
        const updateItem = HostingList.filter((curentElem) => {
            return curentElem.city === cityItem
        });
        setItems(updateItem);
    }

    //function to load more hotel
    const loadMore = () => {
        setVisible(visible + 6)
    }

    // function to sort item by price descending
    const priceFilterUp = () => {
        const sortedArray = [...HostingList].sort((a, b) => {
            return b.price - a.price
        });
        setItems(sortedArray)
    }

    // function to sort item by price ascending
    const priceFilterDown = () => {
        const sortedArray = [...HostingList].sort((a, b) => {
            return a.price - b.price
        });
        setItems(sortedArray)
    }

    const gradeFilter = () => {
        const sortedArray = [...HostingList].sort((a, b) => {
            return b.grade - a.grade
        });
        setItems(sortedArray)
    }

    return (
        <main>
            <div>
                <section>
                    <h1>Trouver votre hébergement pour des vacances de rêve</h1>
                    <p>En plein centre ville ou en pleine nature</p>
                    <form method="post" acton="" className="formulaire" >
                        <button className="localisation" disabled><i className="fas fa-map-marker-alt"></i></button>
                        <input
                            type="text"
                            placeholder="Entrez un nom de ville"
                            onChange={(e) => setSearchTerm(e.target.value)}>
                        </input>
                        <button type="button" className="searchBtn" onClick={searchBtnFilter}><span>Rechercher</span> </button>
                    </form>
                </section>

                
                <div className="filterBtn abovefilterbtn">
                    <button
                        className="cancelBtn"
                        onClick={() => {
                            setItems(HostingList);
                        }}
                    >
                        Annuler Sélection
                    </button>

                    <button className="priceUp" onClick={priceFilterUp}>Prix <i className="fas fa-arrow-up"></i> </button>
                    <button className="priceDown" onClick={priceFilterDown}>Prix <i className="fas fa-arrow-down"></i> </button>
                    <button className="grade" onClick={gradeFilter}>Note <i className="fas fa-star"></i> </button>
                </div>

                <div className="filterBtn">
                    {filtersCities.map((city) => (
                        <button
                            key={city}
                            type="button"
                            className="btn-inactive"
                            onClick={() => {
                                filterCity(city);
                            }}
                        >
                            {city}
                        </button>
                    ))}

                    {filtersCategories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className="btn-inactive"
                            onClick={() => {
                                filterItem(category);
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mainHostingSection" >
                <div className="mainImgHosting" >
                    {items.slice(0, visible).map(({ id, cover, name, price, grade,city}) => (
                        <div key={id}>
                            <MainHostingItems
                                cover={cover}
                                name={name}
                                price={price}
                                grade={grade}
                                city={city}
                            />
                        </div>
                    ))}
                </div>
                {visible < items.length && (
                    <h4 onClick={loadMore} className="loadMore" > Afficher Plus </h4>
                )}
            </div>
        </main>
    )
}

export default MainHosting