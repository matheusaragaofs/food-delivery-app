import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";
import { AntDesign } from "@expo/vector-icons";
import { styled } from "nativewind";
const AntDesignIcon = styled(AntDesign);

const dummyData = [
  {
    imgUrl:
      "https://vivariomarrecife.com.br/wp-content/uploads/sites/10/2018/07/KFC_Balde-de-frango.jpg",
    title: "KFC",
    rating: 4.2,
    genre: "Sushi",
    address: "Imbiribeira",
    short_description: "",
    dishes: "",
    long: "",
    lat: "",
  },
  {
    imgUrl:
      "https://vivariomarrecife.com.br/wp-content/uploads/sites/10/2018/07/KFC_Balde-de-frango.jpg",
    title: "Mc Donalds",
    rating: 3.7,
    genre: "Mexican",
    address: "Boa Viagem",
    short_description: "",
    dishes: "",
    long: "",
    lat: "",
  },
  {
    imgUrl:
      "https://vivariomarrecife.com.br/wp-content/uploads/sites/10/2018/07/KFC_Balde-de-frango.jpg",
    title: "Subway",
    rating: 1.2,
    genre: "Fat Food",
    address: "Recife",
    short_description: "",
    dishes: "",
    long: "",
    lat: "",
  },
];
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View className="py-4">
      {/* TITLE */}
      <View className="flex flex-row justify-between px-2">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text>{description}</Text>
        </View>
        <AntDesignIcon
          className="absolute right-3 top-1"
          name="arrowright"
          size={24}
          color="black"
        />
      </View>
      {/* CARD SECTION */}
      <FlatList
        data={dummyData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 15,
        }}
        keyExtractor={(item) => item.title}
        renderItem={({ item: restaurant }) => (
          <RestaurantCard {...restaurant} />
        )}
      />
    </View>
  );
};

export default FeaturedRow;
