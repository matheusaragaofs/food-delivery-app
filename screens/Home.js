import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { View } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Header />
    </View>
  );
};

export default Home;
