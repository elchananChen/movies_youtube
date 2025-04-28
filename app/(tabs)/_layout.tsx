import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons, TIconName } from "@/constants/icons";

type TabIconProps = {
  name: string;
  focused: boolean;
  icon: TIconName;
};

const TabIcon = ({ name, icon: iconName, focused }: TabIconProps) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          className="flex flex-row w-full mt-4 flex-1 justify-center items-center min-w-[112px] min-h-16 rounded-full overflow-hidden"
          source={images.highlight}
        >
          <Image
            source={icons[iconName]}
            tintColor="#151312"
            className="size-5"
          ></Image>
          <Text className="text-secondary text-base font-semibold ml-2">
            {name}
          </Text>
        </ImageBackground>
      </>
    );
  }
  return (
    <View className="justify-center items-center size-full mt-4 rounded-full">
      <Image
        source={icons[iconName]}
        tintColor="#A8B5DB"
        className="size-5"
      ></Image>
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name={"Home"} icon={"home"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name={"Search"} icon={"search"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name={"Profile"} icon={"person"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name={"Saved"} icon={"save"} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
