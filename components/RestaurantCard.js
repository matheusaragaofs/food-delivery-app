import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons as SimpleLine } from "@expo/vector-icons";
import { styled } from "nativewind";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
const AntDesignIcon = styled(AntDesign);
const SimpleLineIcons = styled(SimpleLine);
const RestaurantCard = (props) => {
  const { imgUrl, name, rating, address } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { ...props })}
      className="mr-3 bg-white shadow"
    >
      <Image
        className="w-64 h-36"
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      />
      <View className="bg-white p-3 space-y-1">
        <Text className="font-bold text-lg">{name}</Text>
        <View className="flex flex-row space-x-2">
          <AntDesignIcon name="star" size={20} color="#90b18c" />
          <Text className="text-gray-400">
            <Text className="text-[#90b18c]">{rating}</Text>
          </Text>
        </View>
        <View className="flex flex-row space-x-2">
          <SimpleLineIcons
            className="text-gray-400"
            name="location-pin"
            size={20}
          />
          <Text className="text-gray-400">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
