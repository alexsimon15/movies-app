import React from "react";

function Movies({ movies }) {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  return (
    <div className='movie'>
      <img
        src={movies.Poster === "N/A" ? url : movies.Poster}
        alt='poster'
        className='movie-img'
      />
      <div className='movie-info'>
        <h1>{movies.Title}</h1>
        <h4>{movies.Year}</h4>
        <p>{movies.Description}</p>
      </div>
    </div>
  );
}

export default Movies;
