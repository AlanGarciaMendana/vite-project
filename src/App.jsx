import { useState } from 'react'
import React from 'react'
import './App.css'
import Footer from './components/layout/footer/footer'
import NavBar from "./components/layout/navbar/NavBar"
import PaginaPrincipal from "../src/components/pages/Main/MainPage"
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Carrito from './components/carrito/carrito'
import Error from './components/Error/error'
import Categorias from './components/pages/Categorias/Categorias'
import ComoComprar from './components/pages/como-comprar/ComoComprar'
import QuienesSomos from './components/pages/Quienes-Somos/QuienesSomos'
import { ItemListContainer } from './components/itemlistcontainer/itemlistcontainer'
import Productos from './components/pages/Productos/productos'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from "./context/CartContext.jsx";

const App = () => {

  return(

<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/" element={<PaginaPrincipal subtitulos={"Productos Destacados"}></PaginaPrincipal>}></Route>
<Route path="/carrito" element={<Carrito/>}></Route>
<Route path="/como-comprar" element={<ComoComprar/>}></Route>
<Route path="/quienes-somos" element={<QuienesSomos/>}></Route>
<Route path="/categorias" element={<Categorias/>}></Route>
<Route path="/productos" element={<Productos/>}></Route>
<Route path="/productos/:productosId" element={<ItemDetailContainer/>}></Route>
<Route path="/categorias/:categoryId" element={<ItemListContainer/>}></Route>
<Route path="*" element={<Error/>}></Route>
</Routes>
<Footer />
</BrowserRouter>

)
}
export default App
