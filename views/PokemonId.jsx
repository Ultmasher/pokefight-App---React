import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemon } from '../api/api.jsx';

const PokemonId = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  

  useEffect(() => {
    fetchPokemon(id).then((data) => {
      setPokemon(data)
      setLoading(false);
    })
  }, [id])

  return (
    <div>
      {/* <button onClick={() => navigate(-1)}>Back</button>
      {loading ? <p>Loading...</p> : (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        </div>
      )} */}
    </div>
  )
}

export default PokemonId