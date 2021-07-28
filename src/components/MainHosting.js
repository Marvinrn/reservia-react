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
        setItems(updateItem);
    }

    const loadMore = () => {
        setVisible(visible + 6)
    }

    return (
        <main>
            <div>
                <select className="selectCategory" >
                    <option  onClick={() => setItems(HostingList)} >Choissez une catégorie</option>
                    <option  onClick={() => filterItem('économique')} >Économique</option>
                    <option  onClick={() => filterItem('familial')}  >Familial</option>
                    <option  onClick={() => filterItem('romantique')}>Romantique</option>
                    <option  onClick={() => filterItem('animaux autorisés')}>Animaux autorisés</option>
                </select>

                <select className="selectCity" >
                    <option  onClick={() => setItems(HostingList)} >Choissez une ville</option>
                    <option  onClick={() => filterCity('Paris')} >Paris</option>
                    <option  onClick={() => filterCity('Strasbourg')}  >Strasbourg</option>
                    <option  onClick={() => filterCity('Lyon')}>Lyon</option>
                    <option  onClick={() => filterCity('Lille')}>Lille</option>
                    <option  onClick={() => filterCity('Marseille')} >Marseille</option>
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