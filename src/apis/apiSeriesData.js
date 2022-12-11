import { instance as request } from "./index";

const api_key = process.env.REACT_APP_API_KEY;

export const netflixOriginals = async () => {
  const response = await request.get(
    `/discover/tv?api_key=${api_key}&with_networks=213`
  );
  return response;
};
export const topRatedSeries = async () => {
  const response = await request.get(`/tv/top_rated?api_key=${api_key}`);
  return response;
};
export const popularSeries = async () => {
  const response = await request.get(`/tv/popular?api_key=${api_key}`);
  return response;
};
export const romanceSeries = async () => {
  const response = await request.get(
    `/discover/tv?api_key=${api_key}&with_genres=10749`
  );
  return response;
};
export const comedySeries = async () => {
  const response = await request.get(
    `/discover/tv?api_key=${api_key}&with_genres=35`
  );
  return response;
};
export const documentarySeries = async () => {
  const response = await request.get(
    `/discover/tv?api_key=${api_key}&with_genres=99`
  );
  return response;
};
