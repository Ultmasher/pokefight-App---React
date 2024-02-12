import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../views/Home";
import Pokemon from "../views/Pokemon";
import PokemonId from "../views/PokemonId";
//import { loader as allPokemonLoader } from "../views/Pokemon";
import './App.css';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" component={Home} />
    <Route path="/pokemon" component={Pokemon} />
    <Route path="/pokemon/:id" component={PokemonId} />
  </Routes>
  </BrowserRouter>);
}

export default App;
