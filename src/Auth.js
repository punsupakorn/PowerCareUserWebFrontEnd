import React, { useState, useEffect } from "react";
import liff from "@line/liff";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    liff.getProfile((user) => {
      console.log(user);
      // setcurrentUser(user);
      // setloading(false);
    });
    // firebaseConfig.auth().onAuthStateChanged((user) => {
    //   setCurrentUser(user);
    //   setLoading(false);
    // });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
