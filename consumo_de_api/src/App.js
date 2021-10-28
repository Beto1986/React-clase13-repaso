// 3 - Consumo de APIs.
// Dentro del proyecto de componentes consumiremos la url: https://jsonplaceholder.typicode.com/posts
// De aquí obtendremos el title y el body.
// Los mostraremos por console.log.
// Luego lo mapearemos, dentro del componente Titulo el title y del componente Parrafo el body.
// Cuando se haya terminado, separá al componente de carga en la carpeta services y llamalo desde el componente requerido.
// 7

import "./App.css";
import { useEffect, useState } from "react";
import getallposts from "../src/services/services";
import { Titulo, Parrafo } from "./components";

function App() {
  const [data, setData] = useState([]);
  const dataallposts = () => getallposts(setData);

  useEffect(() => {
    dataallposts();
  }, []);

  // console.log(data);

  return (
    <>
      {data &&
        data.map((d) => {
          return (
            <>
              <Titulo data={d} />
              <Parrafo data={d} />
            </>
          );
        })}
    </>
  );
}

export default App;
