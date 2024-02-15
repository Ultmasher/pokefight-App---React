import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom'; 
import { fetchPokemon } from '../api/api.jsx';
import { useNavigate, useParams } from "react-router-dom";


const PokemonId = () => {
  const navigate = useNavigate();
  const [selectedPokemonId, setSelectedPokemonId] = useState([]);
  const { id } = useParams();

  const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  try {
    setSelectedPokemonId(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  fetchPokemon(id);
}, []);
  
    return (
    <div>
      <h1>Pokemon</h1>
      <h2>{selectedPokemonId.name}</h2>
      <img src={selectedPokemonId.sprites.front_default} alt={selectedPokemonId.name} />
      <p>Height: {selectedPokemonId.height}</p>
      <p>Weight: {selectedPokemonId.weight}</p>
      <button onClick={() => navigate('/pokemon')}>Back</button>
    </div>
    );
}

export default PokemonId