import React from "react";
import Movie from "./Movie";
const MovieList = ({loading, errorMessage, movies}) => {
  return (
    <div className="movies">
      { loading && !errorMessage ? (
        <span>loading... </span>
      ) : errorMessage ? (
        <div className="errorMessage">{ errorMessage }</div>
      ) : (
            movies.map((movie, index) => (
              <Movie key={ `${ index }-${ movie.Title }` } movie={ movie } />
            ))
          ) }
    </div>
  )
}

export default MovieList;