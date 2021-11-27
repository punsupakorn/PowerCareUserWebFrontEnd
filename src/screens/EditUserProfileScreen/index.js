import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants";
import { Modal } from "react-responsive-modal";
import { HiCheckCircle } from "react-icons/hi";
import { useHistory } from "react-router";



// import { AuthContext } from "../../Auth";
export default function EditUserProfileScreen() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [sex, setsex] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [UserId, setUserId] = useState("");
  let accessToken = localStorage.getItem("AccessToken");
  const [loading, setloading] = useState(true);
  const history = useHistory();
  
  // const { accessToken } = useContext(AuthContext);

  const getUserProfile = () => {
    try {
      axios
        .post(server.EDIT_USER_PROFILE, {
          accessToken: accessToken,
        })
        .then((res) => {
          setfirstname(res.data.FirstName);
          setlastname(res.data.LastName);
          setsex(res.data.Sex);
          setaddress(res.data.Address);
          setphone(res.data.Phone);
          setemail(res.data.Email);
          setUserId(res.data.UserID);
        })
        .then((res) => {
          setloading(false);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleFirstName = (e) => {
    const firstname = e.target.value;
    setfirstname(firstname);
  };

  const handleLastName = (e) => {
    const lastname = e.target.value;
    setlastname(lastname);
  };

  const handleSex = (e) => {
    const sex = e.target.value;
    setsex(sex);
  };

  const handleAddress = (e) => {
    const address = e.target.value;
    setaddress(address);
  };

  const handlePhone = (e) => {
    const phone = e.target.value;
    setphone(phone);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setemail(email);
  };

  const handleEdit = () => {
    let user = {
      firstname: firstname,
      lastname: lastname,
      sex: sex,
      address: address,
      phone: phone,
      email: email,
    };

    let data = Object.values(user).every((value) => value);

    if (data == false) {
      window.alert("กรุณากรอกข้อมูลส่วนตัวให้ครบถ้วน");
    } else {
      try {
        axios.put(server.EDIT_USER_PROFILE, {
          UserId: UserId,
          FirstName: firstname,
          LastName: lastname,
          Sex: sex,
          Address: address,
          Phone: phone,
          Email: email,
        })
        // window.alert("แก้ไขข้อมูลสำเร็จ");
        // history.replace({ pathname: `/menuhome` });
        .then(setOpenFirst(true));
      } catch (error) {
        return error;
      }
    }
  };

  const [openFirst, setOpenFirst] = React.useState(false);


 

  if (loading === true) {
    return <div className="loading">loading...</div>;


  } else {
    return (
      <div classname="bg-indigo-200 h-screen w-screen">
        <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                  แก้ไขข้อมูลส่วนตัว
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
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    ชื่อจริง :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={firstname}
                    required
                    value={firstname}
                    onChange={handleFirstName}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    นามสกุล :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={lastname}
                    required
                    value={lastname}
                    onChange={handleLastName}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เพศ :
                  </label>
                  <select
                    value={sex}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    onChange={handleSex}
                    // onClick={handlePosition}
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
                    name="message"
                    id="message"
                    placeholder={address}
                    value={address}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    onChange={handleAddress}
                    defaultValue={""}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เบอร์ติดต่อ :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={phone}
                    value={phone}
                    onChange={handlePhone}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    อีเมลล์ :
                  </label>
                  <input
                    value={email}
                    type="text"
                    name="name"
                    id="name"
                    placeholder={email}
                    onChange={handleEmail}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    onClick={handleEdit}
                  >
                    บันทึก
                  </button>
                  <Modal
                    open={openFirst}
                    onClose={() => setOpenFirst(false)}
                    center
                  >
                    <center>
                      <div className="w-80">
                        <HiCheckCircle size="150px" color="#66bb6a" />
                      </div>
                      <p className="font-bold">แก้ไขข้อมูลส่วนตัวสำเร็จ</p>
                    </center>
                    <center>
                      <Link to="/menuhome">
                        <div className="mb-6">
                          <button className="w-80 px-1 py-3 text-white bg-gray-300 rounded-md mt-3">
                            กลับสู่หน้าหลัก
                          </button>
                        </div>
                      </Link>
                    </center>
                  </Modal>
                </div>
                <Link to="/menuhome">
                  <div className="mb-6">
                    <button className="w-full px-3 py-4 text-white bg-gray-300 rounded-md ">
                      ย้อนกลับ
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
