import React from "react";
import { useHistory } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  let history = useHistory();
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const showDetailMovie = (movieId) => {
    history.push("/movie/" + movieId);
    console.log('movieId', movieId);
  }
  return (
    <div className="movie" onClick={ showDetailMovie.bind(this, movie.imdbID) }>
      <h2>{ movie.Title }</h2>
      <div>
        <img
          width="200"
          alt={ `The movie titled: ${ movie.Title }` }
          src={ poster }
        />
      </div>
      <p>({ movie.Year })</p>
    </div>
  );
};


export default Movie;