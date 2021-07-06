import React from 'react';
import { homeHostingList } from '../datas/HostingAsideList'
import {asideList} from '../datas/HostingAsideList'
import HomeHostingItem from './HomeHostingItem';
import '../styles/HostingAside.css'
import HomeAsideItem from './HomeAsideItem';

function HostingAside() {
    return (
        <div className="sectionHebergementAside">
            <section className="sectionHebergement" >
                <h2>Hébergement à Marseille</h2>
                <div className="imgHebergement" >
                    {homeHostingList.map(({ id, cover, name, price }) => (
                        <div key={id}>
                            <HomeHostingItem
                                cover={cover}
                                name={name}
                                price={price}
                            />
                        </div>
                    ))}
                </div>
                <h4> Afficher Plus </h4>
            </section>


            <aside className="populaire">
                <div className="titlePopulaire">
                    <h2>Les plus populaires</h2>
                    <i className="fas fa-chart-line"></i>
                </div>
                <div>
                {asideList.map(({ id, cover, name, price }) => (
                        <div key={id}>
                            <HomeAsideItem
                                cover={cover}
                                name={name}
                                price={price}
                            />
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default HostingAside;