import React from "react";
import { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, name) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCred) => {
        // Update the user's display name
        return db.collection("users").doc(userCred.user.uid).set({
          name: name,
        });
      });
  }

  // function signup(email, password, name) {
  //   return auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCred) => {
  //       // Update the user's display name
  //       return auth.currentUser
  //         .updateProfile({
  //           name: name,
  //         })
  //         .then(() => {
  //           // Add a document to the "users" collection
  //           return db.collection("users").doc(userCred.user.uid).set({
  //             name: name,
  //           });
  //         });
  //     });
  // }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
