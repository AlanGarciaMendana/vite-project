import { Link } from "react-router-dom"

const Categorias =()=>{
    return (<div className="CategoriasLista"> 
    <ul className="categorias--list">
    <li className="categorias--list--item"><Link to="/categorias/hogar">HOGAR</Link></li>
    <li className="categorias--list--item"><Link to="/categorias/ferreteria">FERRETERIA</Link></li>
    <li className="categorias--list--item"><Link to="/categorias/pequenos-electrodomesticos">PEQUEÑOS ELECTRODOMESTICOS</Link></li>
    </ul></div>)
}
export default Categorias