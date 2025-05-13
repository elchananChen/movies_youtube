import { Movie } from "@/types/movie";
import { create } from "zustand";

// Define the store

type TMovieState = {
  isDataLoaded: boolean;
  setDataLoaded: (loaded: boolean) => void;
  movies: Movie[] | null;
  setMovies: (newData: Movie[]) => void;
};

const useMovies = create<TMovieState>((set) => ({
  isDataLoaded: false,
  setDataLoaded: (loaded) => set({ isDataLoaded: loaded }),
  movies: null,
  setMovies: (newMovies: Movie[]) => set({ movies: newMovies }),
}));

export default useMovies;
