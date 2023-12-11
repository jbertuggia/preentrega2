
import ItemCount from "../itemcount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ title, price, description, detail, image, stock }) => {

    return (

        <div className="card estilo" >
            <img src={image} className="card-img-top" alt={description} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Precio: {price} USD</p>
                <p className="card-text">Stock disponible: {stock}</p>
                <p className="card-text">Detalle del producto: {detail}</p>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada:', quantity)} />
        </div>

    )
}

export default ItemDetail;