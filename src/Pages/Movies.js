import React from "react";
import {
  actionMovies,
  comedyMovies,
  documentaryMovies,
  horrorMovies,
  romanceMovies,
  topRated,
} from "../apis/apiMovieData";
import Row from "../components/Row";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <Row title="Top-Rated" fetchRow={topRated} />
      <Row title="Action" fetchRow={actionMovies} />
      <Row title="Comedy" fetchRow={comedyMovies} />
      <Row title="Romance" fetchRow={romanceMovies} />
      <Row title="Horror" fetchRow={horrorMovies} />
      <Row title="Documentary" fetchRow={documentaryMovies} />
    </div>
  );
}

export default Movies;
