import AppWrapper from './AppWrapper';
import Parent from './components/Parent';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Layout = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to={"/"}>Regresar a home</Link>
      <Link to={"alertas"}>Alertas</Link>
      <Link to={"pokemon"}>Pokemon</Link>
      <Link to={"counter"}>Counter</Link>
    </nav>
    <div>
      <Outlet />
    </div>
  </div>
)

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResponse = await fetch(POKEMON_API_URL);
      const pokemonData = await pokemonResponse.json();

      setPokemon(pokemonData);
    };

    fetchPokemon();
  }, [])

  return (
    <div>
      Pokemon
      {JSON.stringify(pokemon)}
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="alertas" element={<AppWrapper />} />
          <Route path="counter" element={<Parent />} />
          <Route path="pokemon" element={<Pokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
