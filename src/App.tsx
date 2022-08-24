import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Pokemon, pokemon$, selected$ } from "./store";

function Search() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const sub = pokemon$.subscribe(setPokemon);

    return () => sub.unsubscribe();
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) =>
        p.name.toLocaleLowerCase().includes(search.toLowerCase())
      ),
    [pokemon, search]
  );

  const handleSelect = (pokemon: Pokemon) => {
    if (selected$.value.includes(pokemon.id)) {
      selected$.next(selected$.value.filter((id) => id !== pokemon.id));
    } else {
      selected$.next([...selected$.value, pokemon.id]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredPokemon.map((p) => (
          <div key={p.id} style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={p.selected}
              onChange={() => handleSelect(p)}
            />
            <div>{p.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    pokemon$.subscribe(console.log);
  }, []);

  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1ft" }}>
        <Search />
      </div>
    </div>
  );
}

export default App;
