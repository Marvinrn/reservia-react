import React from 'react';
import { homeHostingList } from '../datas/HostingAsideList'
import {asideList} from '../datas/HostingAsideList'
import HomeHostingItem from './HomeHostingItem';
import '../styles/HostingAside.css'
import HomeAsideItem from './HomeAsideItem';

function HostingAside() {

    return (
        <main className="sectionHostingAside">
            <section className="sectionHosting" >
                <h2>Hébergement à Marseille</h2>
                <div className="imgHosting" >
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


            <aside className="popular">
                <div className="titlePopular">
                    <h2>Les plus populaires</h2>
                    <i className="fas fa-chart-line"></i>
                </div>
                <div className="flexFigure">
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
        </main>
    )
}

export default HostingAside;