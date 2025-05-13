import axios from "axios";
import { moviesInstance } from "./axiosInstance";

export const getPopularMovies = async () => {
  // const localIP = getLocalIP();
  try {
    const data = await moviesInstance.get("/get_popular_movies");
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchMovies = async () => {};
