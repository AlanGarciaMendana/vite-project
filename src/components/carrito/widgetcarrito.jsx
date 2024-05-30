
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import CartContextProvider from "../../context/CartContext";


const Carritocompras = () =>{
    const { totalQty } = useCartContext();

    return (
        <CartContextProvider>
      <div className="carritito">
        <Link to="/carrito" className='carritito1'> 🛒 </Link>
        <span> {totalQty} </span>
      </div>
      </CartContextProvider>
    );
  };

export default Carritocompras


