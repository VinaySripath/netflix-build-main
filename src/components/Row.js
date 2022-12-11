import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Row.css";

function Row({ title, fetchRow, isLargeRow = false }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchMovieData = async () => {
      const moviesFetched = await fetchRow();
      setMovies(moviesFetched.data.results);
    };
    fetchMovieData();
  }, [fetchRow]);
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <Carousel
        responsive={responsive}
        itemClass={`row_poster ${isLargeRow && "row_poster_large"}`}
      >
        {movies.map((movie) => {
          if (
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)
          ) {
            return (
              <img
                className={`row_poster ${isLargeRow && "row_poster_large"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          } else {
            return null;
          }
        })}
      </Carousel>
    </div>
  );
}

export default Row;
