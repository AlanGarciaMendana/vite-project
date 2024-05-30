import {useState} from "react"
import { ItemListContainer} from "../../itemlistcontainer/itemlistcontainer"
import { Layout } from "../../layout/layout"
import banner_1 from "../../assets/banner-1.png"



 const PaginaPrincipal = ({subtitulos}) => { 


    return(
        <>
            
              <div className="contenedorbanner"><img className="banner_1" src={banner_1} alt="logo" /></div>
        <h2 className="ofertasdesc">{subtitulos}</h2>
        <main >
       <ItemListContainer/>
       </main>
       </>
    )

}

export default PaginaPrincipal