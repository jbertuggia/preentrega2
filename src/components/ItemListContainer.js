
import { useState, useEffect } from "react";
import { getProductos, getProductosByCategory } from "../AsyncMock";
import ItemList from "./itemlist/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner =({greeting}) => {
    const [Productos, setProductos] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
       const asynfunc = categoryId ? getProductosByCategory : getProductos

            asynfunc(categoryId)
            .then(response => {
                setProductos(response)
            })

            .catch(error => {
                console.error(error)
            })
    },
        [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList Productos={Productos}/>
        </div>
    )
}   


export default ItemListConteiner;