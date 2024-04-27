import NavBar from "./navbar/NavBar";
import Footer from "./footer/footer";

export const Layout = ({children}) =>{
  return(
    <>
    <NavBar/>
    <div>
      {children}
    </div>
    <Footer/>
    </>
  )
}