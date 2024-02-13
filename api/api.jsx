export const fetchPokemons = async () => {
    try {
        const response = await fetch("https://pokefight-cy50.onrender.com/api/pokemon");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  