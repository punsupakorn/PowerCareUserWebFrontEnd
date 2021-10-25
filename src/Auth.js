import React, { useState, useEffect } from "react";
import liff from "@line/liff";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  // const [currentUser, setcurrentUser] = useState(null);

  const [accessToken, setAccessToken] = useState(null);
    useEffect(() => {
    initLine();
  }, []);

 const initLine = () => {
    liff.init({ liffId: '1656423908-vEgA2gn7' }, () => {
      if (liff.isLoggedIn({ redirectUri: "https://powercareuser.systems" })) {
        runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }

  const runApp = () => {
    const accessToken = liff.getAccessToken();
    setAccessToken(accessToken)
    console.log(accessToken);
  }

  // useEffect(() => {
  //   liff.getContext((user) => {
  //   //   console.log(user);
  //     // setcurrentUser(user);
  //     // setloading(false);
  //   // });
  //   // firebaseConfig.auth().onAuthStateChanged((user) => {
  //   //   setCurrentUser(user);
  //   //   setLoading(false);
  //   // });
  // }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
