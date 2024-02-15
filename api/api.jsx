  export const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokefight-cy50.onrender.com/");
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`https://pokefight-cy50.onrender.com/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }

  };