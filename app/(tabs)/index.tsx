import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import { getPopularMovies } from "@/api/movieApi";
import { useEffect } from "react";

console.log(process.env.TMDB_KEY);
export default function Index() {
  useEffect(() => {
    try {
      console.log(getPopularMovies());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View className="flex-1 bg-primary ">
      <Image source={images.bg} className="absolute size-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={icons.logo}
          className="mx-auto  mt-16 w-[57px] h-[43px]"
        />
      </ScrollView>
    </View>
  );
}
