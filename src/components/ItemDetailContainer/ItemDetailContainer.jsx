import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { collection , getDoc , doc } from "firebase/firestore"
import { db } from "../../firebase/firebase";
const ItemDetailContainer = ()=>{
const {productosId} =useParams()
const [product, setProduct] = useState([])

useEffect(()=>{
    const productosColeccion = collection(db, "Productos")
 const refDoc = doc(productosColeccion,productosId)
 getDoc(refDoc).then((res)=>{
    setProduct({id:res.id,...res.data()})
 })
    .catch((err)=>console.log(err))  
},[productosId]
)
return(<>
    <ItemDetail {...product} /> 
    </>
    )
}


export default ItemDetailContainer