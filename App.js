import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import loading from "./assets/loading.gif";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  var [isLoading, setIsLoading] = useState(true);
  var [imageFromTheInternet, setImageFromTheInternet] = useState(
    "https://picsum.photos/200/300"
  );
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async (e) => {
    // e.preventDefault();
    setIsLoading(true);
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    var rand_number = Math.ceil(Math.random() * 29);
    console.log(data?.products[rand_number]?.images[1]);
    setImageFromTheInternet(data?.products[rand_number]?.images[1]);
    setIsLoading(false);
  };
  return (
    <View style={styles.mainView}>
      {isLoading ? (
        <Image source={loading}></Image>
      ) : (
        <View>
          <Image
            source={{
              uri: imageFromTheInternet,
            }}
            height={200}
            width={200}
          />
          <Button title="Get Random Image" onPress={getImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center", //Centered vertically
    alignItems: "center", //Centered horizontally
  },
});
