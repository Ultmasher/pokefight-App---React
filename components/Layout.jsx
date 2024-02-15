import Header from './Header'; // adjust the path if necessary
import Footer from './Footer'; // adjust the path if necessary
import { Outlet } from "react-router-dom";
import Pokemons from '../views/Pokemon';
import PokemonId from '../views/PokemonId';

const Layout = () => {
    return (
      <>
        <Header />
        <Pokemons />
        <PokemonId />
        <main>
          <Outlet />  
        </main> 
        <Footer />
      </>
    )
  }
  
  export default Layout