import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFNPMFn8eRJ-hJ3X0qQi-CdKHTSfUYq5E",
  authDomain: "shopmartapp.firebaseapp.com",
  projectId: "shopmartapp",
  storageBucket: "shopmartapp.appspot.com",
  messagingSenderId: "148015000433",
  appId: "1:148015000433:web:cffe125221f28b1b6324d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);