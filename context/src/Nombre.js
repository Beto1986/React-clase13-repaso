import React from "react";
import { MyContext } from "./contexts/nombreContext";

const Nombre = () => {
  const { nombre } = React.useContext(MyContext);
  return <p>{nombre}</p>;
};

export default Nombre;
