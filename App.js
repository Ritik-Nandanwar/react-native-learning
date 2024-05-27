import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login";
import AllNotes from "./Screens/AllNotes";
import Notes from "./Screens/Notes";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="AllNotes" component={AllNotes} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    color: "#222",
  },
});
export default App;
