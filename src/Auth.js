import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { useHistory } from "react-router";
import axios from "axios";
import { server } from "./constants";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [loading, setloading] = useState(true);

  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    initLine();
    // checkUser();
  }, []);

  const runApp = () => {
    const accessToken = liff.getAccessToken();
    setAccessToken(accessToken);
    console.log(accessToken);
  };

  const initLine = async () => {
    liff.init(
      { liffId: "1656423908-vEgA2gn7" },
      () => {
        if (liff.isLoggedIn({ redirectUri: "https://powercareuser.systems" })) {
          runApp();
          setloading(false);
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
    const accessToken = liff.getAccessToken();
    await axios.get(`${server.LOGIN}/${accessToken}`).then((res) => {
      if (res == true) {
        history.push("/menuhome");
      }
    });
    setAccessToken(accessToken);
  };

  // const checkUser = () => {
  //   axios.get(`${server.LOGIN}/${accessToken}`).then((res) => {
  //     if (res == true) {
  //       history.push("/menuhome");
  //     }
  //   });
  // };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
