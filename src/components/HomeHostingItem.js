import '../styles/HomeHostingItem.css'

function HomeHostingItem({ cover, name, price }) {
    return (
        <figure className="hostingFigure">
            <img className="hotelCover" src={cover} alt={name} />
            <figcaption>
            <h3>{name}</h3>
            <p>Nuit à partir de {price}€ </p>
            <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star greystar"></i>
            </div>
            </figcaption>
        </figure>
    )
}

export default HomeHostingItem