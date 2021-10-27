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
      "eyJhbGciOiJIUzI1NiJ9.1Ll2zEcI4Pp9kwVaI_EJJIcnW25oRvsvanrdIZu5Q7QFEbDrkPBhZug1FZizZQY-GZaaneyKc1o27GSTp2mR-vxl3TVJ3RdSCqiUFFCzqgJeUuxBOv1K_Yplci3Mu8oZ-f41ObDbpkhrv3qwINngAJroR9Qp7rj2f4z5f1H37Lk.xBNqriY2v3n0lAmG1MKX7IFtzLqs3ofh7vYHD4nvD_o"
    );
    setloading(false);
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
