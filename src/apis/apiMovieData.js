import { instance as request } from "./index";

const api_key = process.env.REACT_APP_API_KEY;

export const netflixOriginals = async () => {
  const response = await request.get(
    `/discover/tv?api_key=${api_key}&with_networks=213`
  );
  return response;
};

export const trendingMovies = async () => {
  const response = await request.get(
    `/trending/all/week?api_key=${api_key}&language=en-US`
  );
  return response;
};

export const topRated = async () => {
  const response = await request.get(`/movie/top_rated?api_key=${api_key}`);
  return response;
};

export const actionMovies = async () => {
  const response = await request.get(
    `/discover/movie?api_key=${api_key}&with_genres=28`
  );
  return response;
};
export const comedyMovies = async () => {
  const response = await request.get(
    `/discover/movie?api_key=${api_key}&with_genres=35`
  );
  return response;
};
export const romanceMovies = async () => {
  const response = await request.get(
    `/discover/movie?api_key=${api_key}&with_genres=10749`
  );
  return response;
};
export const horrorMovies = async () => {
  const response = await request.get(
    `/discover/movie?api_key=${api_key}&with_genres=27`
  );
  return response;
};
export const documentaryMovies = async () => {
  const response = await request.get(
    `/discover/movie?api_key=${api_key}&with_genres=99`
  );
  return response;
};
