// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhZrHLbBEfr6gjj2IE7ghJzF87ddIulHI",
  authDomain: "react-native-app-53795.firebaseapp.com",
  projectId: "react-native-app-53795",
  storageBucket: "react-native-app-53795.appspot.com",
  messagingSenderId: "321715656176",
  appId: "1:321715656176:web:19db1d3e876a4abea0f935",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

export const auth = getAuth(app);
