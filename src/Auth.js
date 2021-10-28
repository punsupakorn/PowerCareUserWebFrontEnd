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
    // initLine();
    localStorage.setItem("Auth", "YES");
    setAccessToken(
      "eyJhbGciOiJIUzI1NiJ9.wdWxryJcH_IWZUtTo1Sqn4StD4WNRbWzBsr5XTA1oZ2pxL1hxDSc5CfJizdeLQElr-dD6cnm8R63kW_iATUUMuLbks_Hx0mpNNZ73UBDw91HxqiN0wdHYPhqp_YruOTNjgVVrCigpxyjPekOGcDhstNZe7upVOA0ZrY7WPbrcIg.b94rNykXIzi6Zf73W1oCeJbqW81IDwr-ZtG6kN_KhfE"
    );
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
