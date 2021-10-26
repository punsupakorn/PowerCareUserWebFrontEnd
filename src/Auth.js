import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { Redirect } from "react-router";
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
    localStorage.setItem("Auth", "YES");
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzI1NiJ9.eY7CtiTz3ntHPpXSu9eOsB4Yw00wwrwMLkkiYYs9Xhh_OTcrxxIDcywRWnS5BRGf0xW7PxUgz1fc-sPzWakzluUJ8n_Z4Qc8M2NkhzyLoc6SYoiXE0AAXgXgxtXCgCWV9dw3rFRwJyvw65C09rWaQsGmNWjPO9q6eWl47zqLBpU.SFXU4bolzweW-KWjDbHAqcoyUbH3JUdknuHIHuqici8"
    );
    setloading(false);
    // await initLine();
    // checkUserId();
  }, []);

  // const runApp = () => {
  //   const accessToken = liff.getAccessToken();
  //   setAccessToken(accessToken);
  //   console.log(accessToken);
  // };

  // const initLine = async () => {
  //   liff.init(
  //     { liffId: "1656423908-vEgA2gn7" },
  //     () => {
  //       if (liff.isLoggedIn({ redirectUri: "https://powercareuser.systems" })) {
  //         runApp();
  //         setloading(false);
  //       } else {
  //         liff.login();
  //       }
  //     },
  //     (err) => console.error(err)
  //   );
  //   const accessToken = liff.getAccessToken();
  //   await axios.get(`${server.LOGIN}/${accessToken}`).then((res) => {
  //     const check = res.data;
  //     if (check == true) {
  //       console.log("true : ", check);
  //       localStorage.setItem("Auth", "YES");
  //     } else {
  //       console.log("false : ", check);
  //       localStorage.setItem("Auth", "NO");
  //     }
  //   });
  //   // setAccessToken(accessToken);
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
