// 1-  Componentes:
// Quiero generar los siguientes componentes:
// Título: Que contenga una  etiqueta H1. Se le pasará una prop que se llame “contenido”. La prop no es obligatoria por lo que, en caso de no poseerla, debe venir por defecto el siguiente texto “Esto es un título”.
// El estilo debe: Los atributos que trae por defecto el H1 y agregarle el texto alineado al centro.
// Párrafo: Debe ser una etiqueta P. Se le debe pasar el contenido por prop. Una segunda prop será el color de la fuente. Ésta debe pasarse el nombre del color, por ej “orange” y una alineación (en caso de no tenerla, el texto se alineará a la izquierda).
// Carta: incluirá un título y tres párrafos.

// Recordá usar una carpeta por cada componente y, además, un index.js dentro de la carpeta componentes que importe a cada componente y lo retorne (no por default).

import "./App.css";
// import { Titulo, Parrafo, Carta } from "./components";
import { Carta } from "./components";

function App() {
  return (
    <div className="App">
      {/*Acá el contenido padre es el que manda*/}
      {/* <Titulo contenido="Guayerd" /> */}
      {/* <Titulo /> */}
      {/* <Parrafo
        contenido="Esto es un párrafo"
        color="orange"
        alineacion="right" // por ejemplo si le pasaria una alineacion por prop en right, sino es left por default dentro del componente
      /> */}
      {/* <Parrafo contenido="Esto es un párrafo" color="orange" /> */}
      <Carta />
    </div>
  );
}

export default App;
