import React, { useReducer, useEffect } from "react";
// import PropTypes from 'prop-types';


import Search from "../components/Search";
import MovieList from "../components/MovieList";

import { initialState, reducer } from "../reducers/movieReducer";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const Home = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {

        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${ searchValue }&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  return (
    <>
      <Search search={ search } />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <MovieList movies={ movies } errorMessage={ errorMessage } loading={ loading } />
    </>
  )
};

// Home.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default Home;