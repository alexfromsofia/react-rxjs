import { useEffect } from "react";
import "./App.css";
import { pokemonWithPower$ } from "./store";

function App() {
  useEffect(() => {
    pokemonWithPower$.subscribe(console.log);
  }, []);

  return <div className="App"></div>;
}

export default App;
