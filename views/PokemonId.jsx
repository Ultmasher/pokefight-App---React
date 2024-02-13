import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'; 
import { fetchPokemons } from '../api/api.jsx';  

const PokemonId = () => {
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null); 
  useEffect(() => {
    fetchPokemons(id).then((data) => {   
      setPokemon(data); 
      console.log('your results are: ' + data);
    });
  }, [id]); 

  if(!pokemon) {
    return <div><img src='./loading.gif' alt='Loading...'/></div>
  }

  return (
    <div>PokemonId</div>
  )
}

export default PokemonId