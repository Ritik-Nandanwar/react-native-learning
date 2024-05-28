import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase.config";

const Notes = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (auth?.currentUser) {
      setUser(auth?.currentUser);
      console.log("current user =>", auth.currentUser.email);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.email}>{user?.auth?.email}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    fontSize: 23,
    color: "#ffaa33",
  },
});

export default Notes;
