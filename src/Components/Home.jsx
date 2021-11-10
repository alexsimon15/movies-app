import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";
import Search from "./Search";

function Home() {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const url = `http://www.omdbapi.com/?s=${query}&apikey=4013b54a`;

  const fetchMovies = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className='app'>
        <Search query={query} setQuery={setQuery} fetchMovies={fetchMovies} />
        <div className='content'>
          {movies.map((movie) => (
            <Movies movies={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
