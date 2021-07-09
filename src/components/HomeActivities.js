import { grandeActivites1 } from '../datas/HomeActivitiesList'
import { petiteActivites1 } from '../datas/HomeActivitiesList'
import { petiteActivites2 } from '../datas/HomeActivitiesList'
import { grandeActivites2 } from '../datas/HomeActivitiesList'
import { petiteActivites3 } from '../datas/HomeActivitiesList'
import { petiteActivites4 } from '../datas/HomeActivitiesList'
import HomeActivitiesItem from './HomeActivitiesItem'
import '../styles/HomeActivities.css'
import '../'



function HomeActivities() {
    return (
        <section className="sectionActivities">
            <h2 className="titleActivities">Activités à Marseille</h2>
            <div className="blocActivities" >
                {grandeActivites1.map(({ cover, name }) => (
                    <div key={name} className="bigActivities">
                        <HomeActivitiesItem
                            cover={cover}
                            name={name}
                        />
                    </div>
                ))}
                <div className="column">
                {petiteActivites1.map(({ cover, name }) => (
                    <div key={name} className="smallActivities">
                        <HomeActivitiesItem
                            cover={cover}
                            name={name}
                        />
                    </div>
                ))}

                {petiteActivites2.map(({ cover, name }) => (
                    <div key={name} className="smallActivities">
                        <HomeActivitiesItem
                            cover={cover}
                            name={name}
                        />
                    </div>
                ))}
                </div>
    
                {grandeActivites2.map(({ cover, name }) => (
                    <div key={name} className="bigActivities">
                        <HomeActivitiesItem
                            cover={cover}
                            name={name}
                        />
                    </div>
                ))}
                <div className="column">
                {petiteActivites3.map(({ cover, name }) => (
                    <div key={name} className="smallActivities">
                        <HomeActivitiesItem
                            cover={cover}
                            name={name}
                        />
                    </div>
                ))}

                {petiteActivites4.map(({ cover, name }) => (
                    <div key={name} className="smallActivities">
                        <HomeActivitiesItem
                            cover={cover}
                            name={name}
                        />
                    </div>
                ))}
                </div>
            </div>

        </section>
    )
}

export default HomeActivities