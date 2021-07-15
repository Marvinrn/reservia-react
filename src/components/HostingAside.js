import React, { useState } from 'react';
import { homeHostingList } from '../datas/HostingAsideList'
import { asideList } from '../datas/HostingAsideList'
import HomeHostingItem from './HomeHostingItem';
import '../styles/HostingAside.css'
import HomeAsideItem from './HomeAsideItem';
import '../styles/Filters.css'

function HostingAside() {

    const [visible, setVisible] = useState(6)
    const [items, setItems] = useState(homeHostingList)

    const filterItem = (categItem) => {
        const updateItem = homeHostingList.filter((curentElem) => {
            return curentElem.category === categItem
        });

        setItems(updateItem);
    }


    const loadMore = () => {
        setVisible(visible + 3)
    }


    return (
        <main>

            <nav>
                <ul className='filters'>
                    <li onClick={() => setItems(homeHostingList)} ><i className="fas fa-ban"></i><strong>Annuler</strong></li>
                    <li onClick={() => filterItem('économique')} ><i className="fas fa-money-bill-wave"></i><strong>Économique</strong></li>
                    <li onClick={() => filterItem('familial')} ><i className="fas fa-child"></i><strong>Familial</strong></li>
                    <li onClick={() => filterItem('romantique')} ><i className="fas fa-heart"></i><strong>Romantique</strong></li>
                    <li onClick={() => filterItem('animaux autorisés')} ><i className="fas fa-dog"></i><strong>Animaux autorisés</strong></li>
                </ul>
            </nav>

            <div className="infobulle">
                <p><i className="fas fa-info"></i></p>
                <p className="infobulletexte">Plus de 500 logements sont disponibles dans cette ville</p>
            </div>

            <div className="sectionHostingAside">
                <section className="sectionHosting" >
                    <h2>Hébergement à Marseille</h2>
                    <div className="imgHosting" >
                        {items.slice(0, visible).map(({ id, cover, name, price, grade }) => (
                            <div key={id}>
                                <HomeHostingItem
                                    cover={cover}
                                    name={name}
                                    price={price}
                                    grade={grade}

                                />
                            </div>
                        ))}
                    </div>
                    {visible < items.length && (
                        <h4 onClick={loadMore} > Afficher Plus </h4>
                    )}
                </section>


                <aside className="popular">
                    <div className="titlePopular">
                        <h2>Les plus populaires</h2>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="flexFigure">
                        {asideList.map(({ id, cover, name, price, grade }) => (
                            <div key={id}>
                                <HomeAsideItem
                                    cover={cover}
                                    name={name}
                                    price={price}
                                    grade={grade}
                                />
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default HostingAside;