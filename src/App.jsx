import {
  createBrowserRouter,
  RouterProvider as RouterProvider,
  Route
} from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Home from "../views/Home";
import Pokemon from "../views/Pokemon";
import PokemonId from "../views/PokemonId";
import Layout from "./components/Layout";
import Error from "./components/Error";
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={<Home />}
      errorElement={<Error />}
    />
    <Route
      path="/pokemon"
      element={<Pokemon />}
      errorElement={<Error />}
    />
    <Route
      path="/pokemon/:id"
      element={<PokemonId />}
      errorElement={<Error />}
    />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
