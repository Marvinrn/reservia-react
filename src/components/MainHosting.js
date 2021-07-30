import React, { useState } from 'react';
import { HostingList } from '../datas/HostingList';
import MainHostingItems from './MainHostingItems'
import '../styles/MainHosting.css'


function MainHosting() {
    const [visible, setVisible] = useState(6)
    const [items, setItems] = useState(HostingList)
    const filtersCities = ['Paris', 'Strasbourg', 'Lyon', 'Lille', 'Marseille']
    const filtersCategories = ['Économique', 'Familial', 'Romantique', 'Animaux autorisés']
 
    console.log(filtersCities);
    console.log(filtersCategories);


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


    return (
        <main>
            <div>
                <div className="filterBtn">
                    <button
                        className="cancelBtn"
                        onClick={() => {
                            setItems(HostingList);
                        }}
                    >
                        Annuler Sélection
                    </button>

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