import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import { AuthContext } from "../../Auth";
import axios from "axios";
import { server } from "../../constants";
import { Modal } from "react-responsive-modal";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";



export default function AppointmentConfirmScreen() {
  
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openFirst, setOpenFirst] = React.useState(false);
  const location = useLocation();
  const { symptom, date, doctorname, doctorid, timetableid, time } =
    location.state;

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [sex, setsex] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [userid, setuserid] = useState("");
  const history = useHistory();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getProfileFromLineUserId();
  }, []);


  const backToMenu = () => {
    try {
      history.replace("/menuhome");
    } catch (error) {}
  };

  const getProfileFromLineUserId = () => {
    let accessToken = localStorage.getItem("AccessToken");
    try {
      axios
        .post(`${server.APPOINTMENT_CONFIRM}/token`, {
          accessToken: accessToken,
        })
        .then((res) => {
          const data = res.data;
          console.log(res);
          setfirstname(data.FirstName);
          setlastname(data.LastName);
          setdateofbirth(data.DateOfBirth);
          setsex(data.Sex);
          setaddress(data.Address);
          setphone(data.Phone);
          setemail(data.Email);
          setuserid(data.UserID);
        })
        .then((res) => setloading(false));
    } catch (error) {
      window.alert(error);
    }
  };

  const displayThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return result;
  };

  const createAppointment = () => {
    let accessToken = localStorage.getItem("AccessToken");
    try {
      axios
        .post(server.APPOINTMENT_CONFIRM, {
          DoctorID: doctorid,
          DoctorName: doctorname,
          Date: date,
          Time: time,
          TimeTableID: timetableid,
          UserID: userid,
          UserName: { firstname, lastname },
          Initial_Symtoms: symptom,
          AccessToken: accessToken,
        })
        .then((res) => {
          const data = res.data;
          if (data == "exist") {
            // window.alert("ขออภัย คุณมีการทำนัดเอาไว้อยู่แล้ว");
            // history.replace("/menuhome");
            setOpenSecond(true)
          } else {
            setOpenFirst(true)
            // window.alert("ทำนัดสำเร็จ กลับสู่หน้าหลัก");
            // history.replace("/menuhome");
          }
        });
        // .then(setOpenFirst(true)).then;
    } catch (error) {
      return error;
    }
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
                  ยืนยันการทำนัด
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
                <form>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 font-bold">
                      ยืนยันการทำนัด :{" "}
                    </label>
                    <p className="text-base text-left text-gray-400">
                      {" "}
                      ชื่อ - นามสกุล : {firstname} {lastname}
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
                      วัน/เดือน/ปีเกิด : {displayThaiDate(dateofbirth)}{" "}
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
                      เพศ : {sex}{" "}
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
                      ที่อยู่ : {address}
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
                      เบอร์ติดต่อ : {phone}
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
                      e-mail : {email}{" "}
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
                      อาการ : {symptom}{" "}
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
                      วันทำนัด : {displayThaiDate(date)}{" "}
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
                      เวลา :{time}
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
                      แพทย์ : {doctorname}{" "}
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
                      onClick={createAppointment}
                      type="button"
                      className="w-full px-3 mt-6 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    >
                      ยืนยันการทำนัด
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
                      <p className="font-bold">ทำนัดสำเร็จ </p>
                    </center>
                    <center>
                
                      <div className="mb-6">
                        <button
                          onClick={backToMenu}
                          className="w-80 px-1 py-3 text-white bg-gray-300 rounded-md mt-3"
                        >
                          กลับสู่หน้าหลัก
                        </button>
                      </div>
                     
                    </center>
                  </Modal>

                  <Modal
                    open={openSecond}
                    onClose={() => setOpenSecond(false)}
                    center
                  >
                    <center>
                      <div className="w-80">
                        <MdCancel  size="150px" color="#cb534a" />
                      </div>
                      <p className="font-bold">ขออภัย คุณมีการทำนัดเอาไว้อยู่แล้ว </p>
                    </center>
                    <center>
                
                      <div className="mb-6">
                        <button
                          onClick={backToMenu}
                          className="w-80 px-1 py-3 text-white bg-gray-300 rounded-md mt-3"
                        >
                          กลับสู่หน้าหลัก
                        </button>
                      </div>
                     
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
