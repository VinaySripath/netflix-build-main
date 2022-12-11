import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { searchResult } from "../apis/apiSearch";
import "./Search.css";

function Search() {
  const location = useLocation();
  const searchKey = location.state;
  const [searchedMovies, setSearchedMovies] = useState();

  const base_url = "https://image.tmdb.org/t/p/original/";

  console.log(searchKey);
  useEffect(() => {
    const fetchSearchData = async () => {
      const searchData = await searchResult(searchKey);
      setSearchedMovies(searchData.data.results);
    };
    fetchSearchData();
  }, [searchKey]);
  console.log(searchedMovies);
  return (
    <div className="search_page">
      <div className="search_container">
        {searchedMovies?.map((movie) => {
          if (movie.poster_path) {
            return (
              <img
                src={`${base_url}${movie.poster_path}`}
                alt="movie"
                className="searched_poster"
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Search;
