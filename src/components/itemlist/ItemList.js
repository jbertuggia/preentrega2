import Item from "../item/Item";
import "./ItemList.css"



const ItemList = ({Productos}) => {

    return (
        <div className="conteiner">
            {Productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;