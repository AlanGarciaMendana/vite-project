import logo from "../../../components/assets/logo.svg" 
import Carritocompras from "../../assets/widgetcarrito"



function NavBar() {
    
    return (
        <header className="Navbar">
            <img className ="logo" src={logo} alt="Logo Compra de todo" />
            <div>
                <ul className="Navbar--list">
                <li className="Navbar--list--item"><a href="">CATEGORIAS</a></li>
                <li className="Navbar--list--item"><a href="">COMO COMPRAR</a></li>
                <li className="Navbar--list--item"><a href="">QUIENES SOMOS</a></li>
                </ul>
            </div>
            <Carritocompras/>
        </header>
    )
}

export default NavBar