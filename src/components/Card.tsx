import "./Card.css"


function Card({title = "titulo por defecto",
    description = "reseña por defecto", image="imagen aquí"}) {
    return (<div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="" />
    </div>);
}

export default Card;