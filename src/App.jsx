import React from 'react';
import {
  Routes, Route, Outlet, Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import AlertsPage from './pages/AlertsPage';
import CounterPage from './pages/CounterPage';
import PokemonPage from './pages/PokemonPage';

function Layout() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Regresar a home</Link>
        <Link to="alertas">Alertas</Link>
        <Link to="pokemon">Pokemon</Link>
        <Link to="counter">Counter</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      Hello
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="alertas" element={<AlertsPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="pokemon" element={<PokemonPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
