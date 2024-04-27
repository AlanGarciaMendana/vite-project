
import { useState,useEffect } from "react";
import { Items } from "../items/items";
import { getProducts } from "../../utils/items-data";
import {ItemList} from "../itemlist/itemlist"

export const ItemListContainer = (  ) => {
const [products, setProducts] = useState([])

useEffect(() => {
    getProducts()
        .then((res) => {
            setProducts(res)
        })
        .catch((error) => {
            console.log(error)
        })
}, [])

return (

    <ItemList productsList={products}/>
  
)
}