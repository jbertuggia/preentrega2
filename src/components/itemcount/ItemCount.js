import { useState } from 'react';
import "./ItemCount.css";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            <div className="contenedor">
                <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <div className='contenedor'>
            <button type="button" className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;