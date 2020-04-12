import React from "react";
import { Link } from "react-router-dom";

const MovieDetail = ({ movieId }) => {
  console.log('MovieDetail:', movieId);
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>Movie Detail</h1>
    </div>
  )
}

export default MovieDetail;