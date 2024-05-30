import ItemCount from "../../utils/item-count"
import { useCartContext } from "../../context/CartContext"

export const ItemDetail = (item) => {
    const { name, description, price, img, stock } = item;
  
    const { addToCart } = useCartContext();
  
    const handlleAddToCart = (cantItems) => {
      addToCart(item, cantItems);
    }
return (  <div className="Pagina-Item">
  
<img src={img} alt={name} />
<h2> {name}</h2>
<p>{description}</p>
<p>${price}</p>
<p>Stock: {stock}</p>

<ItemCount stock={stock}   handlleAddToCart={handlleAddToCart}/>
</div>)
}

export default ItemDetail