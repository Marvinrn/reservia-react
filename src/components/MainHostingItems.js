import '../styles/MainHostingItems.css'



function MainHostingItems({ cover, name, price, grade, city }) {
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
        <figure className="mainHostingFigure">
            <img className="mainHotelCover" src={cover} alt={name} />
            <figcaption>
                <h3>{name}</h3>
                <h6>{city}</h6>
                <p>Nuit à partir de {price}€ </p>
                <div className="gradingStars">
                    {stars}
                </div>
            </figcaption>
        </figure>
    )
}

export default MainHostingItems