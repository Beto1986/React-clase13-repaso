// import Titulo from "../Titulo/Titulo";
// import Parrafo from "../Parrafo/Parrafo";
import {Titulo, Parrafo} from "../../components" 

const Carta = () => {
  return (
    <>
      <Titulo contenido="Titulo Principal" />
      <Parrafo contenido="cont1" color="orange" />
      <Parrafo contenido="cont2" color="blue" alineacion="right" />
      <Parrafo contenido="cont3" color="red" />
    </>
  );
};

export default Carta;
