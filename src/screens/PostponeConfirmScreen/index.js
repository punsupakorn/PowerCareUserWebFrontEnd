import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { HiCheckCircle } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import { useLocation, useHistory } from "react-router";
import axios from "axios";
import { server } from "../../constants";

export default function PostponeConfirmScreen() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const history = useHistory();
  const location = useLocation();
  let accessToken = localStorage.getItem("AccessToken");
  const [sex, setsex] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [loading, setloading] = useState(true);
  const {
    appointmentid,
    oldtimetableid,
    newtimetableid,
    olddate,
    newdate,
    username,
    oldtime,
    newtime,
    symptom,
    dateofbirth,
    doctorname,
  } = location.state;

  const displayShortThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      // weekday: "short",
    });
    return result;
  };

  const getUserProfile = () => {
    try {
      axios
        .post(server.EDIT_USER_PROFILE, {
          accessToken: accessToken,
        })
        .then((res) => {
          setsex(res.data.Sex);
          setaddress(res.data.Address);
          setphone(res.data.Phone);
          setemail(res.data.Email);
          setdob(res.data.DateOfBirth);
        })
        .then((res) => setloading(false));
    } catch (error) {}
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const editappointment = () => {
    let accessToken = localStorage.getItem("AccessToken");
    try {
      axios
        .post(server.POSTPONE_CONFIRM, {
          AppointmentID: appointmentid,
          OldTimeTableID: oldtimetableid,
          NewTimeTableID: newtimetableid,
          Date: newdate,
          OldTime: oldtime,
          NewTime: newtime,
          olddate: olddate,
          doctorname: doctorname,
          symptom: symptom,
          username: username,
          accessToken: accessToken,
        })
        .then(setOpenFirst(true));
      // setOpenFirst(true);
    } catch (error) {}
  };

  const backToMenu = () => {
    try {
      history.replace("/menuhome");
    } catch (error) {}
  };

  if (loading === true) {
    return <div>loading...</div>;
  } else {
    return (
      <div classname="bg-indigo-200 h-screen w-screen">
        <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                  ยืนยันการเลื่อนนัด{" "}
                </h1>

                <p className="text-gray-400 dark:text-gray-400">
                  โปรดตรวจสอบข้อมูลของท่านให้ถูกต้อง
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
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-bold text-20 ">
                    ยืนยันการทำนัด :{" "}
                  </label>
                  <p className="text-base text-left text-gray-400">
                    {" "}
                    <b>ชื่อ - นามสกุล :</b> {username}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b>วัน/เดือน/ปีเกิด :</b> {displayShortThaiDate(dob)}{" "}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b> เพศ :</b> {sex}{" "}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className=" mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b>ที่อยู่ :</b> {address}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b>เบอร์ติดต่อ :</b> {phone}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b>e-mail</b> : {email}{" "}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b> อาการ :</b> {symptom}{" "}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b> วันทำนัด :</b> {displayShortThaiDate(newdate)}{" "}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b>เวลา :</b> {newtime}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                  <p className="mt-2 text-base text-left text-gray-400">
                    {" "}
                    <b>แพทย์ :</b> {doctorname}{" "}
                  </p>
                  <div
                    className="
        flex
        justify-between
        items-center
        w-50
        py-2
        border-b-2 border-gray-100
      "
                  />
                </div>

                <div className="mb-6">
                  <button
                    className="w-full px-3 py-3  text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    onClick={editappointment}
                  >
                    ยืนยันการเลื่อนนัด
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
                      <p className="font-bold">เลื่อนทำนัดสำเร็จ </p>
                    </center>
                    <center>
                      {/* <Link to="/menuhome"> */}
                      <div className="mb-6">
                        <button
                          onClick={backToMenu}
                          className="w-80 px-1 py-3 text-white bg-gray-300 rounded-md mt-3"
                        >
                          กลับสู่หน้าหลัก
                        </button>
                      </div>
                      {/* </Link> */}
                    </center>
                  </Modal>
                </div>
                <Link to="/menuhome">
                  <div className="mb-6">
                    <button className="w-full px-3 py-3 text-white bg-gray-300 rounded-md ">
                      ยกเลิก
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
