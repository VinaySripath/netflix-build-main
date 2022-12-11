import { instance as request } from "./index";

const api_key = process.env.REACT_APP_API_KEY;

export const searchResult = async (searchKey) => {
  const response = await request.get(
    `/search/movie?api_key=${api_key}&query=${searchKey}`
  );
  return response;
};
