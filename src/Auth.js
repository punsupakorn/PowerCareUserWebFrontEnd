import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { Redirect } from "react-router";
import axios from "axios";
import { server } from "./constants";
import { useHistory } from "react-router";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // const history = useHistory();
  const [loading, setloading] = useState(true);
  const [checkUser, setcheckUser] = useState(Boolean);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    initLine();
    // localStorage.setItem("Auth", "NO");
    // setAccessToken(
    // "eyJhbGciOiJIUzI1NiJ9.nBIg-uc1zSS_afPL8UAxj2iIbJUJjc0Y_3-TF-i9jo_7TJrYtdgpRwPM24FxOdfU1HB0yyHUqQh4OpdLi3f7174EVWCM-H-7Doxah9ZC7WLiYN8QCG7YCxEQm5VW85gc_vAjYll5v6Ce769ejwU-0rTiIyBei89_IAJX2tqJ510.lCgumBm200SAtEa1pDxbXZkgBeVpZyzXH2t39qz2U4M"
    // );
    setloading(false);
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
        console.log("true : ", check);
        localStorage.setItem("Auth", "YES");
      } else {
        console.log("false : ", check);
        localStorage.setItem("Auth", "NO");
      }
    });
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
