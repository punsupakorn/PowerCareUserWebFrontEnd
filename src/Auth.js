import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { server } from "./constants";
import { useHistory } from "react-router";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [loading, setloading] = useState(true);
  const [checkUser, setcheckUser] = useState(Boolean);

  const [accessToken, setAccessToken] = useState(null);
  useEffect(async () => {
    await initLine();
    checkUserWithAccessToken();
  }, []);

  // const runApp = () => {
  //   const accessToken = liff.getAccessToken();
  //   setAccessToken(accessToken);
  //   console.log(accessToken);
  // };

  const initLine = async () => {
    liff.init(
      { liffId: "1656423908-vEgA2gn7" },
      () => {
        if (liff.isLoggedIn({ redirectUri: "https://powercareuser.systems" })) {
          // runApp();
          // setloading(false);
          const accessToken = liff.getAccessToken();
          setAccessToken(accessToken);
          console.log(accessToken);
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
    const token = liff.getAccessToken();
    setAccessToken(token);
  };

  const checkUserWithAccessToken = () => {
    try {
      axios.get(`${server.LOGIN}/${accessToken}`).then((res) => {
        const check = res.data;
        if (check == true) {
          console.log("true");
          history.push({ pathname: "/menuhome", state: accessToken });
          // setcheckUser(true);
          return;
        } else {
          history.push({ pathname: "", state: accessToken });
          console.log("false");
          // setcheckUser(false);
        }
      });
    } catch (error) {}
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
