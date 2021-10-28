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
