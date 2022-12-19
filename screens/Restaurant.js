import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
const Restaurant = () => {
  const dispatch = useDispatch()
  const {
    params: { name, rating, genre, dishes, address, imgUrl, short_description, lat, long },
  } = useRoute();
  
  useEffect(() => {
    dispatch(setRestaurant({
      name, rating, genre, dishes, address, imgUrl, short_description, lat, long
    }))
  } , [dispatch])
  
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  
  return (
    <>
    <BasketIcon/>
    <SafeAreaView>
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5  bg-white rounded-full p-2"
          >
            <AntDesign name="arrowleft" size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <AntDesign
                  name="star"
                  size={22}
                  color="green"
                  style={{ opacity: 0.5 }}
                />
                <Text className="text-green-500">{rating}</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <EvilIcons name="location" size={24} color="black" />
                <Text className="text-xs text-gray-500">
                  Neary By . {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row  items-center space-x-2 p-4 border-y border-gray-300">
            <AntDesign
              name="questioncircleo"
              size={20}
              color="gray"
              style={{ opacity: 0.5 }}
            />
            <Text className="pl2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#00ccbb"
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity>
        </View>
        <View className='pb-36'>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            {/* DishRows */}
            {dishes.map(dish => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description }
                price={dish.price}
                image={dish.image}
                />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
              </>
  );
};

export default Restaurant;
