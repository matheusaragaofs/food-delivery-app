import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { AntDesign } from "@expo/vector-icons";
import { styled } from "nativewind";
const AntDesignIcon = styled(AntDesign);
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured' && _id == $id  ]  {
      ...,
      restaurants[] -> {
        ..., 
        dishes[] -> 
      }
     }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);
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
        data={restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 15,
        }}
        keyExtractor={(item) => item._id}
        renderItem={({ item: restaurant }) => (
          <RestaurantCard
            key={restaurant._id}
            {...restaurant}
            imgUrl={restaurant.image.asset._ref}
          />
        )}
      />
    </View>
  );
};

export default FeaturedRow;
