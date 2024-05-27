import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebase.config";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setIsLogginIn(true);
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
        const user = userCred;
        console.log(user);
        // Alert.alert("Logged inNNNNNNN");
        navigation.navigate("Notes");
        setIsLogginIn(false);
      });
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <View style={style.container}>
      <Text style={style.heading}>Login</Text>
      <KeyboardAvoidingView style={style.mainArea}>
        <View style={style.inputField}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={style.inputField}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button title="Login" onPress={handleSubmit} />
        <View>{isLogginIn ? <ActivityIndicator size={"large"} /> : null}</View>
      </KeyboardAvoidingView>
      <Button
        title="All Notes"
        onPress={() =>
          navigation.navigate("AllNotes", { name: "Dhickyuuuu..." })
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: "bold",
  },
  mainArea: {
    borderColor: "#1e1e1e",
    borderWidth: 6,
    padding: 44,
    borderRadius: 18,
    marginVertical: 12,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  inputField: {
    borderColor: "#131313",
    borderWidth: 3,
    width: 240,
    padding: 2,
    marginVertical: 6,
  },
});

export default Login;
