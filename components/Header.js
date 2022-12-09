import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const Header = () => {
    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex flex-row items-center justify-between px-3 pb-3 bg-white">
      <View className="flex flex-row items-center">
        <Image
          className="h-8 w-8 rounded-full mr-3"
          source={{
            uri: "https://i.pinimg.com/736x/8a/11/c8/8a11c803143ee0d621136561c6d4aea4.jpg",
          }}
        />
        <View>
          <Text className="text-gray-400 font-bold">Delivery now!</Text>
          <Text className="font-bold text-lg">
            Current Location
            <AntDesign
              className="self-"
              name="down"
              size={14}
              color="#3cae9f"
            />
          </Text>
        </View>
      </View>
      <AntDesign name="user" size={28} color="#3cae9f" />
    </SafeAreaView>
  );
};

export default Header;
