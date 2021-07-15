import '../styles/HomeHostingItem.css'

function HomeHostingItem({ cover, name, price, grade }) {
    const stars = []

    // Add the stars corresponding to the note
    for (let i = 0; i < grade; i++) {
        stars.push(<Grades key={i} isActivated={true} />)
    }

    // Add empty stars
    for (let i = grade; i < 5; i++) {
        stars.push(<Grades key={i} isActivated={false} />)
    }

    function Grades(props) {
        return <i className="fas fa-star gradingStarsIcon" data-active={props.isActivated} />
    }

    return (
        <figure className="hostingFigure">
            <img className="hotelCover" src={cover} alt={name} />
            <figcaption>
                <h3>{name}</h3>
                <p>Nuit à partir de {price}€ </p>
                <div className="gradingStars">
                    {stars}
                </div>
            </figcaption>
        </figure>
    )
}

export default HomeHostingItem