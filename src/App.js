import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
const Movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};
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
          value="..."
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{Movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                Movie1.Poster !== "N/A"
                  ? Movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={Movie1.Title}
            />
          </div>
          <div>
            <span>{Movie1.Type}</span>
            <h3>{Movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
