import logo from "../../../components/assets/logo.svg" 
import { Link,NavLink } from 'react-router-dom'

const Footer = () =>{
    return(

        <footer className="Footer">
            <div className="footer-div">
                <ul className="Navbar--list-footer">
                <Link to="/" className="Navbar--list--item-footer">HOME</Link>
                <Link to="/Categorias" className="Navbar--list--item-footer">CATEGORIAS</Link>
                <Link to="/como-comprar" className="Navbar--list--item-footer">COMO COMPRAR</Link>
                <Link to="/Quienes-Somos" className="Navbar--list--item-footer">QUIENES SOMOS</Link>
                </ul>
            </div>
        </footer>

    )
}

export default Footer