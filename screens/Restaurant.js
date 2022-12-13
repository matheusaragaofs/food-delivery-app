import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";

const Restaurant = () => {
  const {
    params: { name, imgUrl },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity className="absolute w-full bg-red-400 p-10 bottom-0">
            <Text>Buy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
