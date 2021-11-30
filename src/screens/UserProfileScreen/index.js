import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { server, YES } from "../../constants";
import { AuthContext } from "../../Auth";
import liff from "@line/liff";
import { useLocation, useHistory } from "react-router";

export default function UserProfileScreen() {
  const [date, setDate] = useState();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [Sex, setSex] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const history = useHistory();
  const accessToken = localStorage.getItem("AccessToken");

  // const [loading, setloading] = useState(true)

  // useEffect(() => {
  //   // const isAuthenticated = () => {
  //   //   return localStorage.getItem("Auth") === YES;
  //   // };
  //   if (localStorage.getItem("Auth") === YES) {

  //     //  window.location.replace(`https://${window.location.host}/menuhome`);
  //     // window.location.href = `https://${window.location.host}/menuhome`;
  //     history.push("/menuhome");
  //     // liff.openWindow({
  //     //   url: `${window.location.href}menuhome`,
  //     //   external: false
  //     // });
  //   }
  // },[]);

  // const { accessToken } = useContext(AuthContext);

  // const [accessToken, setAccessToken] = useState("");

  // useEffect(() => {
  //   initLine();
  // });

  // const initLine = async () => {
  //   liff.init(
  //     { liffId: "1656423908-z2DErD50" },
  //     () => {
  //       if (
  //         liff.isLoggedIn({
  //           redirectUri: "https://main.d3w2lvda55pxgd.amplifyapp.com",
  //         })
  //       ) {
  //         runApp();
  //       } else {
  //         liff.login();
  //       }
  //     },
  //     (err) => console.error(err)
  //   );
  // };

  // const runApp = async () => {
  //   const accessToken = liff.getAccessToken();
  //   setAccessToken(accessToken);
  //   console.log("accessToken : ", accessToken);
  //   await axios.get(`${server.LOGIN}/${accessToken}`).then((res) => {
  //     const check = res.data;
  //     if (check === true) {
  //       localStorage.setItem("AccessToken", accessToken);
  //       history.replace("/menuhome");
  //     }else{
  //       setloading(false);
  //     }
  //   });
  // };

  const handleFirstName = (e) => {
    const firstname = e.target.value;
    setFirstName(firstname);
  };

  const handleLastName = (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };

  const handleDateOfBirth = (e) => {
    const dateofbirth = e.target.value;
    setDateOfBirth(dateofbirth);
  };

  const handleSex = (e) => {
    const sex = e.target.value;
    setSex(sex);
  };

  const handleAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = () => {
    let user = {
      FirstName,
      LastName,
      DateOfBirth,
      Sex,
      Address,
      Phone,
      Email,
      //   accessToken,
    };
    let data = Object.values(user).every((value) => value);
    // try {
    if (data == false) {
      window.alert("โปรดกรอกข้อมูลให้ครบถ้วน");
    } else {
      axios
        .post(server.USERPROFILE, {
          FirstName: FirstName,
          LastName: LastName,
          DateOfBirth: DateOfBirth,
          Sex: Sex,
          Address: Address,
          Phone: Phone,
          Email: Email,
          accessToken: accessToken,
        })
        .then((res) => {
          console.log(res);
          history.replace("/menuhome");
        });
    }
    // } catch (error) {
    //   return error;
    // }
  };
  // if(loading ===  true){
  //   return (<div>loading...</div>)
  // }else{
  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                ข้อมูลส่วนตัว
              </h1>

              <p className="text-gray-400 dark:text-gray-400">
                โปรดกรอกข้อมูลของท่านให้ถูกต้อง
              </p>
              <div
                className="
        flex
        justify-between
        items-center
        w-full
        py-2
        border-b-2 border-gray-200
      "
              />
            </div>
            <div className="m-7">
              <form
              // action="https://api.web3forms.com/submit"
              // method="POST"
              // id="form"
              >
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    ชื่อ :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="โปรดกรอกชื่อจริง"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={handleFirstName}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    นามสกุล :{" "}
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="name"
                    placeholder="โปรดกรอกนามสกุล"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={handleLastName}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    วัน / เดือน / ปีเกิด :{" "}
                  </label>
                  {/* <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="โปรดกรอกชื่อจริง"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  /> */}
                  <input
                    className="inline-flex  px-3 w-full  py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    placeholder="เลือกวันที่ทำนัด"
                    type="date"
                    value={date}
                    onChange={handleDateOfBirth}
                    // onChange={(e) => {
                    //   setDate(e.target.value);
                    // }}
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เพศ :
                  </label>
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    onChange={handleSex}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกเพศ
                    </option>
                    <option className="option" value="ชาย">
                      {" "}
                      ชาย{" "}
                    </option>
                    <option className="option" value="หญิง">
                      {" "}
                      หญิง{" "}
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    ที่อยู่ :{" "}
                  </label>
                  <textarea
                    rows={5}
                    name="address"
                    id="message"
                    placeholder="โปรดกรอกที่อยู่"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    defaultValue={""}
                    onChange={handleAddress}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เบอร์ติดต่อ :
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="name"
                    placeholder="โปรดกรอกหมายเลขโทรศัพท์"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={handlePhone}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    อีเมลล์ :
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="name"
                    placeholder="โปรดกรอกอีเมลล์"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={handleEmail}
                  />
                </div>
                <div className="mb-6">
                  {/* <Link to="otp"> */}
                  <button
                    type="button"
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    onClick={handleSubmit}
                  >
                    ลงทะเบียน
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
