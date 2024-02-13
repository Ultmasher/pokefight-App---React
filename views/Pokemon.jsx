import { useState, useEffect } from 'react';
import '../src/App.css'
import { fetchPokemons } from '../api/api.jsx'
//import { useNavigate } from 'react-router';



const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);
  //const navigate = useNavigate()

  useEffect(() => {
    fetchPokemons().then((data) => {
      setPokemons(data)
      setLoading(false);
    })
  }, [])


  return (
    <div className="homepage-pokemons">
      <h1>Pokemons</h1>
      {!loading ?<div className='pokemons-grid'>
        {pokemons.map((pokemon) => (
            <a className='pokemon-card' key={pokemon.id} href={`/pokemons/${pokemon.id}`}>{pokemon.name.english}</a>
        ))}
        </div>
        : <p>Loading...</p>}
    </div>
  )
}

export default Pokemons