import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import SearchBar from "./components/searchBar";
import MovieList from "./components/movieList";

const Search_Api =
  "https://api.themoviedb.org/3/search/movie?api_key=9b4986d97e1401e7bbde7deba01d4159&language=en-US&query=";
const TrendingMovies =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=9b4986d97e1401e7bbde7deba01d4159";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const movieReq = await fetch(TrendingMovies)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <React.Fragment>
      <SearchBar setMovies={setMovies} />
      <MovieList movies={movies} />
    </React.Fragment>
  );
}

export default App;
