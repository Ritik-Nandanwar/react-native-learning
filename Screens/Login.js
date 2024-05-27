import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebase.config";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
        const user = userCred;
        console.log(user);
      });
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <View style={style.container}>
      <Text>Login</Text>
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
  mainArea: {
    borderColor: "#1e1e1e",
    borderWidth: 6,
    padding: 44,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  inputField: {
    borderColor: "#131313",
    borderWidth: 3,
    width: 240,
    padding: 2,
    marginVertical: 3,
  },
});

export default Login;
