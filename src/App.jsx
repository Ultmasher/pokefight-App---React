import { Routes, Route } from "react-router-dom";
import header from "../components/Header";
import Home from "../views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PokemonDetail , SearchResults } from "../views";

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route path="/search/:name" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
