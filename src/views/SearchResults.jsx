import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import "./SearchResults.css";


const fetchRecipes = async (name, setSortedPokes, setPokes) => {
  try {
    const response = await setPokes (0, 200, name);
    setPokes(response);
    setSortedPokes(response);
  } catch (error) {
    console.error(error);
  }
};

function SearchResults() {
  const { name } = useParams();
  const [pokes, setPokes] = useState(null);
  const [SortedPokes, setSortedPokes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes(name, setPokes, setSortedPokes);
  }, [name]);

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };
  
  return (
    <div className="search-all">
      <SearchBar />
      <div className="search">
        <div className="title">
          <button className="back" onClick={() => navigate(-1)}>
            Back
          </button>
          {SortedPokes && SortedPokes.length === 0 && (
            <p className="search-results">No pokes found</p>
          )}
          {SortedPokes && SortedPokes.length >= 1 && (
            <p className="search-results">
              Search results for <span className="search-query">{name}</span>
            </p>
          )}
        </div>
        {SortedPokes && (
          <Filter
          SortedPokes={SortedPokes}
          setSortedPokes={SortedPokes}
            recipes={pokes}
          />
        )}
        <div className="recipe-container">
          {SortedPokes &&
            SortedPokes.map((poke) => (
              <div
                key={poke.sys.id}
                className="recipe-card"
                onClick={() => handleCardClick(poke.sys.id)}
              >
                <p className="recipe-title">{poke.fields.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;