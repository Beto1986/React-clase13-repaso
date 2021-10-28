// 4- ContextAPI
// Vamos a hacer un ejercicio que me comentaron que a algunos de ustedes no les salio:
// En un proyecto nuevo generá un input en app.js que pida el nombre, luego generá estos componentes:
// 	App.js llama a Fichero.js
// Fichero.js llama a Registro.js
// Registro.js llama a Nombre.js
// 	Y dentro de Nombre.js generar un párrafo en donde se muestre el input ingresado. No   uses ni una prop.

import "./App.css";
import GetNombre from "./contexts/nombreContext";
import Fichero from "./Fichero";

function App() {
  return (
    <GetNombre>
      <div className="App">
        <Fichero />
      </div>
    </GetNombre>
  );
}

export default App;
