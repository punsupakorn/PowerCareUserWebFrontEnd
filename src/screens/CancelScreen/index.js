import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { HiCheckCircle } from "react-icons/hi";
import { server } from "../../constants";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function CancelScreen() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
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
  const history = useHistory();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getAppointment();
  }, []);

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
              "ไม่สามารถเลื่อนนัดได้ เนื่องจากอยู่ในสถานะรอพบแพทย์ หากต้องการยกเลิกนัดโปรดติดต่อเจ้าหน้าที่"
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
  const handleDelete = () => {
    try {
      axios.post(server.CANCEL, {
        AppointmentID: appointmentid,
        TimeTableID: oldtimetableid,
        Time: time,
      });
      setOpenSecond(true);
    } catch (error) {}
  };

  const littleLorem = (
    <center>
      <p>คุณต้องการยกเลิกการทำนัดนี้หรือไม่ ?</p>
    </center>
  );

  const displayShortThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      // weekday: "short",
    });
    return result;
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
                {/* <form> */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-bold">
                    รายละเอียดการทำนัด :{" "}
                  </label>
                  <p className="text-base text-left text-gray-400" id="result">
                    {" "}
                    <b> ชื่อ - นามสกุล :</b> {username}
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
                    <b>วัน/เดือน/ปีเกิด : </b>
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
                    <b>เพศ :</b> {sex}{" "}
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
                    <b>วันทำนัด :</b> {displayShortThaiDate(date)}{" "}
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
                {/* <Link to="/appointmentconfirm"> */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-3 text-white bg-red-700 rounded-md "
                    // onClick={handleShow}
                    onClick={() => setOpenFirst(true)}
                  >
                    ยกเลิกการทำนัด
                  </button>

                  <Modal
                    open={openFirst}
                    onClose={() => setOpenFirst(false)}
                    center
                  >
                    <center>
                      <p className="font-bold">คำเตือน</p>
                    </center>
                    <div
                      className="
          flex
          justify-between
          items-center
          w-50
          py-2
          mb-3
          border-b-2 border-gray-100
        "
                    />
                    {littleLorem}
                    <div
                      className="
          flex
          justify-between
          items-center
          w-50
          py-2
          mb-3
          border-b-2 border-gray-100
        "
                    />
                    <center>
                      <button
                        type="submit"
                        className="w-80 px-1 py-3 text-white bg-red-700 rounded-md mt-3"
                        onClick={handleDelete}
                        // onClick={() => setOpenSecond(true)}
                      >
                        ยืนยันยกเลิกการทำนัด
                      </button>
                      <div className="mb-6"></div>
                    </center>
                  </Modal>
                  <Modal
                    open={openSecond}
                    onClose={() => setOpenSecond(false)}
                    center
                  >
                    <center>
                      <p className="font-bold">ยืนยันการยกเลิกนัด </p>
                    </center>
                    <div
                      className="
          flex
          justify-between
          items-center
          w-50
          py-2
          mb-3
          border-b-2 border-gray-100
        "
                    />

                    <center>
                      <div className="w-80">
                        <HiCheckCircle size="150px" color="#66bb6a" />
                      </div>
                      <p className="font-bold">เสร็จสิ้น </p>
                    </center>
                    <div
                      className="
          flex
          justify-between
          items-center
          w-50
          py-2
          mb-3
          border-b-2 border-gray-100
        "
                    />
                    <center>
                      <Link to="/menuhome">
                        <button
                          type="submit"
                          className="w-80 px-1 py-3 text-white bg-gray-300 rounded-md mt-3"
                          // onClick={handleShow}
                        >
                          กลับสู่หน้าหลัก
                        </button>{" "}
                      </Link>
                      <div className="mb-6"></div>
                    </center>
                  </Modal>
                </div>
                {/* </Link> */}
                <Link to="/menuhome">
                  <div className="mb-6">
                    <button className="w-full px-3 py-3 text-white bg-gray-300 rounded-md ">
                      ย้อนกลับ
                    </button>
                  </div>
                </Link>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
