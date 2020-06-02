import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAESLjnyGBJmv3ozbdy42rIqdNe7OVRSfk",
  authDomain: "portfolio-c0c5a.firebaseapp.com",
  databaseURL: "https://portfolio-c0c5a.firebaseio.com",
  projectId: "portfolio-c0c5a",
  storageBucket: "portfolio-c0c5a.appspot.com",
  messagingSenderId: "464847837542",
  appId: "1:464847837542:web:39e11bd128ae1e1e4c90a7",
  measurementId: "G-ZS00W2MJ0F",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
