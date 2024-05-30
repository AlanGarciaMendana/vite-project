
import { useState,useEffect } from "react";
import {ItemList} from "../itemlist/itemlist"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection , getDocs, where , query } from "firebase/firestore";
export const ItemListContainer = (  ) => {
    const [products, setProducts] = useState([])


const {categoryId} =useParams()
useEffect(() => {

    const productosColeccion = collection(db, "Productos")
    if(categoryId){
     const consulta = query(productosColeccion, where("category", "==",categoryId))
     getDocs(consulta)
     .then(({docs}) =>{
        const prodDocs = docs.map((doc)=>({id:doc.id,...doc.data()}))
        setProducts(prodDocs)
    })
    }else{
        getDocs(productosColeccion).then(({docs}) =>{
            const prodDocs = docs.map((doc)=>({id:doc.id,...doc.data()}))
            setProducts(prodDocs)
        })
       
 
        .catch((error) => {
            console.log(error)
        })}
}, [categoryId])

return (

    <ItemList productsList={products}/>

)
}