import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { Redirect } from "react-router";
import axios from "axios";
import { NO, server, YES } from "./constants";
import { useHistory } from "react-router";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // const history = useHistory();
  const [loading, setloading] = useState(true);
  const [checkUser, setcheckUser] = useState(Boolean);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(async () => {
     await initLine();
    // localStorage.setItem("Auth", "YES");
    // setAccessToken(
    //   "eyJhbGciOiJIUzI1NiJ9.rcvNf7FMG3bowHlL8Ei0_GZzinyUKDwfauuGxOeij5ccyY7kUAFIo9qv_nUcJiS6L4upZmZ0NylaidLNiS-vpjd3mioRNTq6Spm_Ed9zFA8CJtMtJnwSz57lkJKvADpjqp8xCmjffRs7loR0ZfPEQJyFTos6QX0nQ-hxTHHeH2E.JK1oB7ykzebBuHc3m8qadFoKhJ1wSGW6bfjWvb2Vf0A"
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
      { liffId: "1656423908-z2DErD50" },
      () => {
        if (
          liff.isLoggedIn({
            redirectUri: "https://main.d3w2lvda55pxgd.amplifyapp.com/",
          })
        ) {
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
        localStorage.setItem("Auth", YES);
      } else {
        console.log("false : ", check);
        localStorage.setItem("Auth", NO);
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
