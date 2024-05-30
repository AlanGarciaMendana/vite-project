import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

 const ItemCount = ({  handlleAddToCart }) => {
  const navigate = useNavigate();
  const [cantItems, setCantItems] = useState(0);
  const [prodAgregado, setProdAgregado] = useState(false);

  const handlleAdd = () => {
    setCantItems(cantItems + 1);
  };
  const handlleSubs = () => {
    if (cantItems > 0) {
      setCantItems(cantItems - 1);
    }

  };

  const handleTerminarCompra = () => {
    setProdAgregado(false);
    navigate("/carrito");
  };

  const handleAgregarAlCarrito = () => {
    setProdAgregado(true);
    handlleAddToCart(cantItems);
  };

  return (
    <>
      <div>
      <button onClick={handlleSubs}> - </button>
        <span> {cantItems} </span>
        <button onClick={handlleAdd}> + </button>
      </div>
      <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
      {prodAgregado ? 
        <button className="terminarcompra" onClick={handleTerminarCompra}> Terminar Compra </button>
      : <p></p>}
    </>
  );
};

export default ItemCount