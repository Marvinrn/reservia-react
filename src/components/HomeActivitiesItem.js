import '../styles/HomeActivitiesItem.css'


function HomeActivitiesItem({name, cover}) {
    return (
        <div>
            <figure className="activitiesFigure">
                <img className='imgActivities' src={cover} alt={name} />
                <figcaption>
                    <h3>{name}</h3>
                </figcaption>
            </figure>
        </div>
    )
}

export default HomeActivitiesItem