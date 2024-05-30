
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  const [totalQty, setTotalQty] = useState(0);
const [cart,setCart] = useState([])
const [totalPrice,setTotalPrice] = useState(0)


  const addToCart =(item,qty)=>{

    setTotalQty(totalQty + qty)
    setTotalPrice(totalPrice + item.price*qty)
 
    if(isInCart(item.id)){
      const newCart = cart.map((elem)=>{
        if(elem.id === item.id){
          return {...elem,qty:elem.qty + qty}
        }else{return elem}
      })
      setCart (newCart)
    }else{

setCart([...cart,{ ...item, qty}])}

  }
const isInCart = (id) =>{
  return cart.find ((elem)=>elem.id === id)
}
const removerItem =(id,price,qty)=>{
      setTotalPrice (totalPrice - price * qty)
      setTotalQty (totalQty - qty)
    const newCart = cart.filter((elem)=>elem.id !== id)
setCart(newCart)
}
const limpiarCarrito =()=>{
  setCart ([])
  setTotalPrice (0)
  setTotalQty(0)
}
  const contextValue ={
    totalQty,
    addToCart,
    cart,
    totalPrice,
    removerItem,
    limpiarCarrito,
  }

  return (<Provider value={contextValue}>{children}</Provider>)
}

export default CartContextProvider