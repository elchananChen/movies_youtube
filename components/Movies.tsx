import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { getPopularMovies } from "@/services/movieApi";
import useMovies from "@/context/moviesStore";
import { MovieResponseValidationResult } from "@/types/movie";
import { images } from "@/constants/images";

export default function Movies() {
  const [popularMovies, setPopularMovies] = useState<Movie[] | null | any>(
    null
  );

  const [error, setError] = useState<null | unknown>(null);

  const { isDataLoaded, setDataLoaded, movies, setMovies } = useMovies();

  const fetchMovies = async () => {
    try {
      const res = (await getPopularMovies()) as any;
      const movies = res.data as MovieResponseValidationResult;
      if (movies.success === true) setPopularMovies(movies.data.results);
      if (movies.success === "partial" && movies.data.results) {
        setPopularMovies(movies.data.results);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View>
      {popularMovies && (
        <View>
          <FlatList
            data={popularMovies}
            renderItem={(movie) => (
              <TouchableOpacity className="flex-1">
                <Text className="text-white">{movie.item.title}</Text>
                <Image
                  source={
                    movie.item.backdrop_path
                      ? {
                          uri: `https://image.tmdb.org/t/p/original/${movie.item.backdrop_path}`,
                        }
                      : images["placeHolder"]
                  }
                  className="w-full h-52"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
            keyExtractor={(movie) => movie.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 10,
              paddingRight: 5,
              marginBottom: 10,
            }}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingBottom: 300,
            }}
          />
        </View>
      )}
    </View>
  );
}
