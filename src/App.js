import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

//call the api and store it
const API_URL = "http://www.omdbapi.com?apikey=e54d193";

const App = () => {
  //create state for movies and for search
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  //create function allow user to search movie by title using API response
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // data logged and received then pushed into the state array of movies
    setMovies(data.Search);
  };

  //useEffect rendering list of movies automatically
  useEffect(() => {
    SearchMovies("Spiderman");
  }, []);

  //rendering
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          //value the state of search
          value={searchTerm}
          //set the search to the user target input
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            SearchMovies(searchTerm);
          }}
        />
      </div>
      {/* condional rendering depends on the length of the movie array to insure data received */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
