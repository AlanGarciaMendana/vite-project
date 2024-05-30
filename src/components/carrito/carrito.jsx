import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase"


const Carrito=()=>{

    const {cart,totalPrice,removerItem,limpiarCarrito} =useCartContext()
    const [formData,setFormData] = useState({name:"",tel:"",mail:""})
    const handleOnChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
const accremoverItem = (id,price,qty)=>{
removerItem(id,price,qty)

}
const acclimpiarCarrito =()=>{
    limpiarCarrito()
}
const handleSaveCart = () =>{
    const colecciondeCarrito = collection(db, "orders")
    const newOrder = {
        buyer:formData,
        items: cart,
        date: new Date(),
        total:totalPrice,
    }
    addDoc(colecciondeCarrito,newOrder).then((res)=>{alert("compra realizada con exito, Codigo:" + res.id);limpiarCarrito();setFormData({name:"",tel:"",mail:""})})
    .catch((err)=> console.log(err))
}
return (
        <>
<div className="carritopag">
                {cart.map(({ id, name, price, img, qty }) => (
                    <div className="CartaItem2" key={id}>
                        <img src={img} alt={name} />
                        <div className="itemdetail">
                            <h2>{name}</h2>
                            <p>${price}</p>
                            <p>Cantidad: {qty}</p>
                            <p>Precio Total ${qty * price}</p>
                        </div>
                        <button onClick={() => accremoverItem(id, price, qty)}>Remover Item</button>
                    </div>
                ))}
                {cart.length > 0 && (
                    <>
                        <h2>Precio Total ${totalPrice}</h2>
                        <button onClick={acclimpiarCarrito}>Limpiar Carrito</button>
                        <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={(e) => handleOnChange(e)} />
                        <input type="tel" name="tel" id="tel" placeholder="Ingrese su telefono" onChange={(e) => handleOnChange(e)} />
                        <input type="mail" name="mail" id="mail" placeholder="Ingrese su email" onChange={(e) => handleOnChange(e)} />
                        <button onClick={handleSaveCart}>Finalizar Compra</button>
                    </>
                )}
            </div>
        </>
    )
}



export default Carrito