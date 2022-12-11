import React, { useEffect, useState } from "react";
import "./Banner.css";
import { netflixOriginals } from "../apis/apiMovieData";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const moviesBanner = await netflixOriginals();
      setMovie(
        moviesBanner.data.results[
          Math.floor(Math.random() * moviesBanner.data.results.length - 1)
        ]
      );
    };
    getMovie();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview || "description not found", 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
