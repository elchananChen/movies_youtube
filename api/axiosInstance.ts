import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const moviesInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
