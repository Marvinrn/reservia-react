import React, { useState } from 'react';
import { HostingList } from '../datas/HostingList';
import MainHostingItems from './MainHostingItems'
import '../styles/MainHosting.css'


function MainHosting() {
    const [visible, setVisible] = useState(6)
    const [items, setItems] = useState(HostingList)
    const filtersCities = ['Paris', 'Strasbourg', 'Lyon', 'Lille', 'Marseille']
    const filtersCategories = ['Économique', 'Familial', 'Romantique', 'Animaux autorisés']

    // Note to myself: Pour le menu filtre, améliorer en faisant en sorte de s'avoir quel boutton est actif


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

    return (
        <main>
            <div>
                <div className="filterBtn abovefilterbtn">
                    <button
                        className="cancelBtn"
                        onClick={() => {
                            setItems(HostingList);
                        }}
                    >
                        Annuler Sélection
                    </button>

                    <button onClick={priceFilterUp}>Prix <i className="fas fa-arrow-up"></i> </button>
                    <button onClick={priceFilterDown}>Prix <i className="fas fa-arrow-down"></i> </button>
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
                    {items.slice(0, visible).map(({ id, cover, name, price, grade }) => (
                        <div key={id}>
                            <MainHostingItems
                                cover={cover}
                                name={name}
                                price={price}
                                grade={grade}

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