import axios from "axios";

const BASE_URL = "http://172.20.10.2:3000/";

export const moviesInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
