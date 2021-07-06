import '../styles/HomeAsideItem.css'

function HomeAsideItem({ cover, name, price }) {
    return (
        <figure className="popularFigure">
            <img className="asideCover" src={cover} alt={name} />
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

export default HomeAsideItem