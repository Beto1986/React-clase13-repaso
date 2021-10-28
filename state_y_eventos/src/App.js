// 2 - State y eventos:
// Venta de empanadas.
// Hacer una web en la que ingresas la cantidad de empanadas a vender dentro de un input, luego mostrá la cantidad ingresada dentro de un párrafo. Debe mostrarse la siguiente leyenda:
// “El cliente X llevará Y empanadas”.
// Una vez que funciona, vamos a agregarle un valor a cada empanada. Cada empanada cuesta $50. Ahora la leyenda a mostrar sera:
// “El cliente X llevará Y empanadas por un total de Z pesos”.
// Agregale un input mas (con su respectivo state) en donde ingresamos el nombre del cliente, Ahora vamos mostrar la leyenda únicamente cuando el nombre del cliente y la cantidad hayan sido ingresadas, sino sólo se mostrará la leyenda
// “Cargando el pedido”.
// Ahora agregaremos un botón.
// Mientras no se haya presionado aún no figurará ninguna leyenda., Al presionarlo vamos a ponerle la leyenda que diga
// “Cargando el pedido”

//  por unos 4 segundos, como si estuviese procesando. Luego de esos 4 segundos, si falta completar algún input figurará la leyenda
// “Ingresá bien los datos” y se borrarán ambos campos.
// Si había datos se mostrará la leyenda:
// “El cliente X llevará Y empanadas por un total de Z pesos”.

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const valorEmpanada = 50;
  const [cantidadDeEmpanadas, setCantidadDeEmpanadas] = useState(0);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fPrimerIngreso, setFPrimerIngreso] = useState(true);
  const handleChangeCantidadDeEmpanadas = (e) => {
    setCantidadDeEmpanadas(e.target.value);
  };
  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const validaCarga = () => {
    setFPrimerIngreso(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      cantidadDeEmpanadas > 0 && nombre !== ""
        ? setError(false)
        : setError(true);
    }, 3000);
  };

  /*
  useEffect()
  useEffect(, [])
  useEffect(, [estado])
*/

  // Para que se re-renderice un componente debe pasar:
  //   o bien hay una prop que acaba de cmabiar el estado
  //   O bien que el estado de este componente haya mutado
  useEffect(() => {
    console.log("Acaba de pasar el UE sin corchetes");
  });
  useEffect(() => {
    console.log(
      "Solo se va a ejecutar cuando inicie por primera vez el componente"
    );
  }, []);
  useEffect(() => {
    console.log("Se modifico NOMBRE o cantidadDeEmpanadas");
  }, [nombre, cantidadDeEmpanadas]);

  useEffect(() => {
    console.log("Se modifico cantidadDeEmpanadas");
  }, [cantidadDeEmpanadas]);

  return (
    <div className="App">
      <input
        name="cantidad"
        type="number"
        onChange={(e) => handleChangeCantidadDeEmpanadas(e)}
        placeholder="Cantidad de empanadas"
      />
      <input
        name="cliente"
        type="text"
        onChange={(e) => handleChangeNombre(e)}
        placeholder="Nombre del cliente"
      />
      {fPrimerIngreso ? null : isLoading ? (
        <p>Cargando el pedido</p>
      ) : error ? (
        <p>Ingresá bien los datos</p>
      ) : (
        <p>
          {nombre} llevará {cantidadDeEmpanadas} empanadas por un total de{" "}
          {valorEmpanada * cantidadDeEmpanadas}
        </p>
      )}

      <button onClick={() => validaCarga()}>Cargar</button>
    </div>
  );
}

export default App;
