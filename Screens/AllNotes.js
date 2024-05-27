import { View, Text, TextInput } from "react-native";
import React from "react";

const AllNotes = ({ route }) => {
  return (
    <View>
      <Text>AllNotes , {route.params.name}</Text>
      <TextInput placeholder="Your name"></TextInput>
    </View>
  );
};

export default AllNotes;
