import { Switch, NavLink, Route } from 'react-router-dom';
import Pokemon from './pages/pokemon';
import PokemonByType from './pages/pokemon-by-type';
import PokemonAxios from './pages/pokemon-axios';
import PokemonPag from './pages/pokemon-pag';
import PokemonModal from './pages/pokemon-modal';
import DecomposingComposers from './pages/decomposing-composers';
import DecomposingComposersFlag from './pages/decomposing-composers-flag';
import RickAndMorty from './pages/rick-and-morty';
import Doggos from './pages/doggos';

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
        <Route path="/decomposing-composers"><DecomposingComposers /></Route>
        <Route path="/decomposing-composers-loading"><DecomposingComposersFlag /></Route>
        <Route path="/rick-and-morty"><RickAndMorty /></Route>
        <Route path="/doggos"><Doggos /></Route>
        <Route path="/">
          <header className="App-header">
            <h1>Awesome lists!</h1>
            <nav>
              <NavLink to="/pokemon">Pokemon</NavLink><br />
              <NavLink to="/pokemon-axios">Pokemon (with axios and custom hook)</NavLink><br />
              <NavLink to="/pokemon-pag">Pokemon (with axios and pagination)</NavLink><br />
              <NavLink to="/pokemon-modal">Pokemon (with bootstrap modal)</NavLink><br />
              <NavLink to="/pokemon-by-type">Pokemon (with filter by type)</NavLink><br />
              <NavLink to="/decomposing-composers">Decomposing Composers (with search and custom hook)</NavLink><br />
              <NavLink to="/decomposing-composers-loading">Decomposing Composers (with isLoading flag)</NavLink><br />
              <NavLink to="/rick-and-morty">Rick And Morty Characters (with custom hook and pagination)</NavLink><br />
              <NavLink to="/doggos">Doggos</NavLink><br />
            </nav>
          </header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
