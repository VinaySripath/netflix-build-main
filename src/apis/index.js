import axios from "axios";

export const instance = axios.create({
  method: "GET",
  baseURL: "https://api.themoviedb.org/3",
});
