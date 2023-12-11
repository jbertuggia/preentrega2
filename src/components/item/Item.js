
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({ id, title, price, description, image, stock }) => {

    return (

        <div className="card estilo" >
            <img src={image} className="card-img-top" alt={description} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Precio: {price} USD</p>
                <p className="card-text">Stock disponible: {stock}</p>
                <Link to={`/item/${id}`}>Ver Detalle</Link>

                
            </div>

        </div>
    )
}

export default Item;