import axios from "axios";
import { moviesInstance } from "./axiosInstance";

export const getPopularMovies = async () => {
  try {
    // const data = await moviesInstance.get("/get_popular_movies");
    const data = await axios.get("http://localhost:3000/get_popular_movies");
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
