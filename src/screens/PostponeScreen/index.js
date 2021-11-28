import React, { useContext, useEffect, useState } from "react";
import { server } from "../../constants";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
export default function PostponeScreen() {
  const [username, setusername] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [sex, setsex] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [symptom, setsymptom] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [doctorname, setdoctorname] = useState("");
  const [doctorid, setdoctorid] = useState("");
  const [appointmentid, setappointmentid] = useState("");
  const [oldtimetableid, setoldtimetableid] = useState("");
  const [loading, setloading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getAppointment();
    // getUser();
  }, []);

  const getUser = () => {
    let accessToken = localStorage.getItem("AccessToken");
    try {
      axios
        .get(`${server.POSTPONE}/user/${accessToken}`)
        .then((res) => {
          const data = res.data;
          setdateofbirth(data.DateOfBirth);
          setsex(data.Sex);
          setaddress(data.Address);
          setphone(data.Phone);
          setemail(data.Email);
        })
        .then((res) => setloading(false));
    } catch (error) {}
  };

  const getAppointment = () => {
    let accessToken = localStorage.getItem("AccessToken");
    try {
      axios
        .get(`${server.POSTPONE}/${accessToken}`)
        .then((res) => {
          const data = res.data;
          if (data == "empty") {
            window.alert("ขออภัย คุณไม่มีการทำนัดในระบบ");
            history.replace("/menuhome");
          } else if (data == "wait") {
            window.alert(
              "ไม่สามารถเลื่อนนัดได้ เนื่องจากอยู่ในสถานะรอพบแพทย์ หากต้องการเลื่อนนัดโปรดติดต่อเจ้าหน้าที่"
            );
            history.replace("/menuhome");
          } else {
            setappointmentid(data.AppointmentID);
            setoldtimetableid(data.TimeTableID);
            setusername(data.UserName);
            setsymptom(data.Initial_Symptoms);
            setdate(data.Date);
            settime(data.Time);
            setdoctorname(data.DoctorName);
            setdoctorid(data.DoctorID);
          }
        })
        .then(getUser());
    } catch (error) {}
  };

  const displayShortThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      // weekday: "short",
    });
    return result;
  };

  const ReplaceToPostponeSelect = () => {
    history.replace("/postponeselect", {
      appointmentid: appointmentid,
      oldtimetableid: oldtimetableid,
      username: username,
      doctorname: doctorname,
      olddate: date,
      oldtime: time,
      doctorid: doctorid,
      symptom: symptom,
      dateofbirth: dateofbirth,
    });
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
                  รายละเอียดการทำนัด
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
                <div className="mb-7">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-bold text-20 ">
                    การทำนัด :{" "}
                  </label>
                  <p className="text-base text-left text-gray-400" id="result">
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b>วัน/เดือน/ปีเกิด :</b>{" "}
                    {displayShortThaiDate(dateofbirth)}{" "}
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b>เพศ :</b>
                    {sex}{" "}
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b>e-mail :</b> {email}{" "}
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b>อาการ :</b> {symptom}{" "}
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b>วันทำนัด : </b>
                    {displayShortThaiDate(date)}{" "}
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b>เวลา :</b> {time}
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
                  <p
                    className="mt-2 text-base text-left text-gray-400"
                    id="result"
                  >
                    {" "}
                    <b> แพทย์ : </b>
                    {doctorname}{" "}
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
                {/* <Link to="/postponeselect"> */}
                <div className="mb-6">
                  <button
                    onClick={ReplaceToPostponeSelect}
                    type="submit"
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    เลื่อนทำนัด
                  </button>
                </div>
                {/* </Link> */}
                <Link to="/menuhome">
                  <div className="mb-6">
                    <button className="w-full px-3 py-3 text-white bg-gray-300 rounded-md ">
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
