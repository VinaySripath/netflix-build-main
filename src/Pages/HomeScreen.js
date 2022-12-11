import React from "react";
import {
  actionMovies,
  comedyMovies,
  documentaryMovies,
  horrorMovies,
  netflixOriginals,
  romanceMovies,
  topRated,
  trendingMovies,
} from "../apis/apiMovieData";
import Banner from "../components/Banner";
import "./HomeScreen.css";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      {/* <Navs /> */}
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <Row
        title="Netflix-Originals"
        fetchRow={netflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchRow={trendingMovies} />
      <Row title="Top-Rated" fetchRow={topRated} />
      <Row title="Action" fetchRow={actionMovies} />
      <Row title="Comedy" fetchRow={comedyMovies} />
      <Row title="Romance" fetchRow={romanceMovies} />
      <Row title="Horror" fetchRow={horrorMovies} />
      <Row title="Documentary" fetchRow={documentaryMovies} />
    </div>
  );
}

export default HomeScreen;
