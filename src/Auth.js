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
    // checkUserId();
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
      const check = res.data;
      if (check == true) {
        console.log("เจอออออ");
        return <Redirect to="/menuhome" />;
        ory.push({ pathname: `/menuhome` });
      } else {
        console.log("ไม่เจอออออ");
        return <Redirect to="/menuhome" />;
        // history.push({ pathname: `/` });
      }
    });
    // setAccessToken(accessToken);
  };

  // const checkUserId = () => {
  //   if (checkUser == true) {
  //     history.push("/menuhome");
  //   } else {
  //     history.push("/");
  //   }
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
