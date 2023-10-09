import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1LIdojGegQUTtsAsDfgo7VaH_A1I0zBk",
  authDomain: "devlink-development.firebaseapp.com",
  databaseURL: "https://devlink-development-default-rtdb.firebaseio.com",
  projectId: "devlink-development",
  storageBucket: "devlink-development.appspot.com",
  messagingSenderId: "771681424892",
  appId: "1:771681424892:web:5e6dd0d317868f45910e79",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
