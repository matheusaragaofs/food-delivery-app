import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView>
      <CategoryCard />
    </ScrollView>
  );
};

export default Categories;
