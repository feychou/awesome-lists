import { Switch, NavLink, Route } from 'react-router-dom';
import Pokemon from './pages/pokemon';
import PokemonByType from './pages/pokemon-by-type';
import PokemonAxios from './pages/pokemon-axios';
import PokemonPag from './pages/pokemon-pag';
import PokemonModal from './pages/pokemon-modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/pokemon"><Pokemon /></Route>
        <Route path="/pokemon-axios"><PokemonAxios /></Route>
        <Route path="/pokemon-pag"><PokemonPag /></Route>
        <Route path="/pokemon-modal"><PokemonModal /></Route>
        <Route path="/pokemon-by-type"><PokemonByType /></Route>
        <Route path="/">
          <header className="App-header">
            <h1>Awesome lists!</h1>
            <nav>
              <NavLink to="/pokemon">Pokemon</NavLink><br />
              <NavLink to="/pokemon-axios">Pokemon (axios and custom hook)</NavLink><br />
              <NavLink to="/pokemon-pag">Pokemon (axios and pagination)</NavLink><br />
              <NavLink to="/pokemon-modal">Pokemon (with modal)</NavLink><br />
              <NavLink to="/pokemon-by-type">Pokemon (filter by type)</NavLink><br />
              <NavLink to="/decomposing-composers">Decomposing Composers (includes search)</NavLink><br />
              <NavLink to="/decomposing-composers-loading">Decomposing Composers (with isLoading flag)</NavLink><br />
              <NavLink to="/rick-and-morty">Rick And Morty Characters</NavLink><br />
              <NavLink to="/rick-and-morty-pag">Rick And Morty Characters (with pagination)</NavLink><br />
              <NavLink to="/doggos">Doggos</NavLink><br />
            </nav>
          </header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
