import { useEffect, useState } from "react";
import { getProductobyId } from "../../AsyncMock";
import ItemDetail from "../itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"


const ItemDetailConteiner = () =>  {
    const [product, setProduct] = useState (null)

    const {id} = useParams();

    useEffect(() => {
        getProductobyId(id)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })

    }, [id])

    return (
        <div className="conteiner">
            <ItemDetail {...product}/>
        </div>
    )
}




export default ItemDetailConteiner;