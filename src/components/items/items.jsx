
import { Link } from "react-router-dom"
export const Items=({id,name,price,img}) =>{

return(

    <div className="CartaItem">
        <img src={img} alt={name} />
        <h2> {name}</h2>
        <p>${price}</p>
        <Link className="VerMas" to={`/productos/${id}`} >Ver Mas</Link>
    </div>

)

}