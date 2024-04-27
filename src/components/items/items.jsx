
import caloventor from "../assets/caloventor.png"
import cepilloEle from "../assets/Cepilloelectrico.png"
import microhondas from "../assets/microhondas.png"

export const Items=({id,name,description,price,image}) =>{

return(

    <div className="CartaItem">
        <img src={image} alt={name} />
        <h2> {name}</h2>
        <p>{description}</p>
        <p>${price}</p>
    </div>

)

}