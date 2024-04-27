import {useState} from "react"
import { ItemListContainer} from "../../itemlistcontainer/itemlistcontainer"
import { Layout } from "../../layout/layout"
import banner_1 from "../../assets/banner-1.png"



 const PaginaPrincipal = ({subtitulos}) => { 

    const [cantItemscalo, setCantImtescalo] = useState(0)
    const restaCantcalo = () => {
        if (cantItemscalo > 0) {
            setCantImtescalo(cantItemscalo - 1);
            console.log (cantItemscalo);
        }}

    const sumaCantcalo = () => {
            setCantImtescalo(cantItemscalo + 1)
            console.log (cantItemscalo)
          
    }
    const [cantItemscepi, setCantImtescepi] = useState(0)
    const restaCantcepi = () => {
        if (cantItemscepi > 0) {
            setCantImtescepi(cantItemscepi - 1);
            console.log (cantItemscepi);
        }}

    const sumaCantcepi = () => {
            setCantImtescepi(cantItemscepi + 1);
            console.log (cantItemscepi);
          
    }
    const [cantItemsmicro, setCantImtesmicro] = useState(0)
    const restaCantmicro = () => {
        if (cantItemsmicro > 0) {
            setCantImtesmicro(cantItemsmicro - 1);
            console.log (cantItemsmicro);
        }}

    const sumaCantmicro = () => {
            setCantImtesmicro(cantItemsmicro + 1)
            console.log (cantItemsmicro);
          
    }

    return(
        <Layout>
            
              <img className="banner_1" src={banner_1} alt="logo" />
        <h2 className="ofertasdesc">{subtitulos}</h2>
        <main>
       <ItemListContainer/>
       </main>
        </Layout>
    )

}

export default PaginaPrincipal