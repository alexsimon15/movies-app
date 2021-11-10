import React from "react";

function Search({ fetchMovies, query, setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className='header'>
      <form class='form-input' onSubmit={handleSubmit}>
        <h2>Search movies</h2>
        <input
          type='text'
          className='search-bar'
          placeholder=' Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
