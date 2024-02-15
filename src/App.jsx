import { CajaGrande1 } from "./cajagrande1/CajaGrande1";
import { CajaGrande2 } from "./cajagrande2/CajaGrande2";
import { Footer } from "./footer/Footer";
import { NavBar } from "./navbar/NavBar";
import Personajes from "./provando/Personaje";

export const App = () => {
  return (
    <>
  
      <NavBar />
      <CajaGrande1><CajaGrande2 autor="soy un hijo"/></CajaGrande1>
      <Personajes/>
     <Footer/>
    </>
  );
};
