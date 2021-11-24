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
    // localStorage.setItem("Auth", "YES");
    // setAccessToken(
    //   "eyJhbGciOiJIUzI1NiJ9.fHapFYYJtaWcdhiFRRDzVsqHFCJ8M3lDQdiFoumcAXkLYv_CmLQpIDfeCr4JfNaT9KAtQodPYm0p13msduJWEBez6fjYr9PPOTmDOwqlCN3EA47DjJxue5y0b-Vt2cItvEjJt4AKTrw0Z460d2js8UecnxTxyt0DpuPEj9dGCiQ.5TCq9dE5zSY_nRXRgE0y49IkbIaU66TfLZjopp-gD38"
    // );
    // setloading(false);
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
        localStorage.setItem("Auth", true);
      } else {
        console.log("false : ", check);
        localStorage.setItem("Auth", false);
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
