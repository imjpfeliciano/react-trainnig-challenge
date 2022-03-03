// import AppWrapper from './AppWrapper';
// import Parent from './components/Parent';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// import {
//   AlertsPage,
//   CounterPage,
//   PokemonPage
// } from './pages'

import AlertsPage from './pages/AlertsPage';
import CounterPage from './pages/CounterPage';
import PokemonPage from './pages/PokemonPage';


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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="alertas" element={<AlertsPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="pokemon" element={<PokemonPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
