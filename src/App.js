import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=e54d193";
const App = () => {
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    SearchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value="Andreia"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" />
      </div>
    </div>
  );
};

export default App;
