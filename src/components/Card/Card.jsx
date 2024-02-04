import "./Card.css";

const Card = ({title, img, year}) => {
  return (
    <div className="card">
        <img src={img} alt={title} />
        <div className="card-details">
            <h2 className="card-title">{title}</h2>
            <p className="card-date">{year}</p>
        </div>
    </div>
  )
}

export default Card