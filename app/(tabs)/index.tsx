import Movies from "@/components/Movies";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      {/* <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      > */}
      <Image source={images.bg} className="absolute size-full z-0" />
      <Image source={icons.logo} className="mx-auto  mt-16 w-[57px] h-[43px]" />
      <View className=" pt-9 "></View>
      {/* </ScrollView> */}
      <Movies />
      <View className="pb-10"></View>
    </View>
  );
}
