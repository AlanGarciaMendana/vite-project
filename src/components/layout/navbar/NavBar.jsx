import logo from "../../../components/assets/logo.svg" 
import Carritocompras from "../../carrito/widgetcarrito"
import { Link,NavLink } from 'react-router-dom'


function NavBar() {
    
    return (
        <header className="Navbar">
            <img className ="logo" src={logo} alt="Logo Compra de todo" />
            <div>
                <ul className="Navbar--list">
                <li className="Navbar--list--item"><Link to="/">HOME</Link></li>
                <li className="Navbar--list--item"><Link to="/productos">PRODUCTOS</Link></li>
                <li className="Navbar--list--item"><Link to="/categorias">CATEGORIAS</Link></li>
                <li className="Navbar--list--item"><Link to="/como-comprar">COMO COMPRAR</Link></li>
                <li className="Navbar--list--item"><Link to="/quienes-somos">QUIENES SOMOS</Link></li>
                </ul>
            </div>
            <Carritocompras/>
        </header>
    )
}

export default NavBar