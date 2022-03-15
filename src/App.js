import React, { useEffect } from "react";

//API key :e54d193

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
  return <div>yes that s true</div>;
};

export default App;
