import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { styled } from "nativewind";
import sanityClient from "../sanity";
const AntDesignIcon = styled(AntDesign);

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured']  {
      ...,
      restaurants[] -> {
        ..., 
        dishes[] -> 
      }
     }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      {/* HEADER */}
      <View className="p-3">
        <View className="flex flex-row items-center justify-between pb-3 ">
          <View className="flex flex-row items-center">
            <Image
              className="h-8 w-8 rounded-full mr-3"
              source={{
                uri: "https://i.pinimg.com/736x/8a/11/c8/8a11c803143ee0d621136561c6d4aea4.jpg",
              }}
            />
            <View>
              <Text className="text-gray-400 font-bold">Delivery now!</Text>
              <View className="flex flex-row items-center">
                <Text className="font-bold text-lg mr-1">Current Location</Text>

                <AntDesignIcon
                  className="pt-1"
                  name="down"
                  size={14}
                  color="#3cae9f"
                />
              </View>
            </View>
          </View>
          <AntDesignIcon name="user" size={28} color="#3cae9f" />
        </View>

        {/* SEARCH */}
        <View className="flex flex-row items-center">
          <View className="flex-1 flex-row items-center bg-gray-100 space-x-2  rounded-sm p-2 mr-3">
            <AntDesignIcon name="search1" size={18} color="#3cae9f" />
            <TextInput
              placeholder="Restaurants and cuisines"
              className="bg-transparent"
            />
          </View>
          <Entypo name="sound-mix" size={24} color="#3cae9f" />
        </View>
      </View>

      {/* BODY */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className="bg-gray-100"
      >
        {/* CATEGORIES */}
        <Categories />

        {/* FEATURED  */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.description}
            featuredCategory="featured"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
