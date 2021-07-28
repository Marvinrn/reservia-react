import React, { useState } from 'react';
import { HostingList } from '../datas/HostingList';
import MainHostingItems from './MainHostingItems'
import '../styles/MainHosting.css'


function MainHosting() {
    const [visible, setVisible] = useState(6)
    const [items, setItems] = useState(HostingList)

    const filterItem = (categItem) => {
        const updateItem = HostingList.filter((curentElem) => {
            return curentElem.category === categItem



        });

        setItems(updateItem);
    }

    const filterCity = (cityItem) => {
        const updateItem = HostingList.filter((curentElem) => {
            return curentElem.city === cityItem
        });
        console.log(filterCity);
        setItems(updateItem);
    }

    const loadMore = () => {
        setVisible(visible + 6)
    }

    return (
        <main>
            <div>
                <select className="selectCategory" >
                    <option value="" onClick={() => setItems(HostingList)} >Choissez une catégorie</option>
                    <option value="Paris" onClick={() => filterItem('économique')} >Économique</option>
                    <option value="Strasbourg" onClick={() => filterItem('familial')}  >Familial</option>
                    <option value="Lyon" onClick={() => filterItem('romantique')}>Romantique</option>
                    <option value="Lille" onClick={() => filterItem('animaux autorisés')}>Animaux autorisés</option>
                </select>

                <select className="selectCity" >
                    <option value="" onClick={() => setItems(HostingList)} >Choissez une ville</option>
                    <option value="Paris" onClick={() => filterCity('Paris')} >Paris</option>
                    <option value="Strasbourg" onClick={() => filterCity('Strasbourg')}  >Strasbourg</option>
                    <option value="Lyon" onClick={() => filterCity('Lyon')}>Lyon</option>
                    <option value="Lille" onClick={() => filterCity('Lille')}>Lille</option>
                    <option value="Marseille" onClick={() => filterCity('Marseille')} >Marseille</option>
                </select>
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