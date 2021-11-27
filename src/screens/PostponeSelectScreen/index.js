import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import axios from "axios";
import { server } from "../../constants/index";

export default function PostponeSelectScreen() {
  const [loading, setloading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const {
    appointmentid,
    oldtimetableid,
    username,
    doctorname,
    olddate,
    oldtime,
    doctorid,
    symptom,
    dateofbirth,
  } = location.state;
  const [dateArr, setdateArr] = useState([]);
  const [timeArr, settimeArr] = useState([]);
  const [newdate, setnewdate] = useState("");
  const [newtime, setnewtime] = useState("");
  const [newtimetableid, setnewtimetableid] = useState("");
  useEffect(() => {
    getNewDate();
  }, []);

  const getNewDate = () => {
    try {
      axios
        .get(`${server.POSTPONE_SELECT}/date/${doctorid}`)
        .then((res) => {
          const data = res.data;
          setdateArr(data);
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

  const getTimeSlot = (TimeTableID) => {
    try {
      axios.get(`${server.POSTPONE_SELECT}/time/${TimeTableID}`).then((res) => {
        const data = res.data;
        settimeArr(data);
      });
    } catch (error) {}
  };

  const handleDate = (e) => {
    const date = e.target.value;
    const data = JSON.parse(date);
    setnewdate(data.date);
    setnewtimetableid(data.timetableid);
    getTimeSlot(data.timetableid);
  };

  const handleTime = (e) => {
    const time = e.target.value;
    const data = JSON.parse(time);
    setnewtime(data.time);
  };

  const checkData = () => {
    let slot = {
      newdate: newdate,
      newtime: newtime,
    };

    let data = Object.values(slot).every((value) => value);
    if (data == false) {
      window.alert("โปรดกรอกวันและเวลาที่ต้องการให้ครบ");
    } else {
      history.replace("/postponeconfirm", {
        appointmentid: appointmentid,
        oldtimetableid: oldtimetableid,
        newtimetableid: newtimetableid,
        olddate: olddate,
        newdate: newdate,
        username: username,
        oldtime: oldtime,
        newtime: newtime,
        symptom: symptom,
        dateofbirth: dateofbirth,
        doctorname: doctorname,
      });
      // history.push({
      //   pathname: `/summarypostpone`,
      //   state: {
      //     appointmentID: appointmentID,
      //     olddate: date,
      //     newdate: newdate,
      //     time: time,
      //     newtime: newtime,
      //     oldtimetableid: oldtimetableid,
      //     newtimetableid: newtimetableid,
      //     doctorId: doctorid,
      //   },
      // });
    }
  };
  const backbutton = () => {
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
                  เลื่อนนัด
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
                    ชื่อ - นามสกุล :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={username}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    แพทย์ที่พบ :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={doctorname}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    วันที่ทำนัดเดิม :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={displayThaiDate(olddate)}
                    disabled
                    className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เวลาทำนัดเดิม :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={oldtime}
                    disabled
                    className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-bold mb-2 text-sm text-gray-600 dark:text-gray-400">
                    วันที่ / เวลา ทำนัดใหม่  <h className="text-red-600"> * </h>
                  </label>
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    onChange={handleDate}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกวันที่
                    </option>
                    {dateArr.map((data) => (
                      <option
                        className="option"
                        value={JSON.stringify({
                          timetableid: `${data.TimeTableID}`,
                          date: `${data.Date}`,
                        })}
                      >
                        {" "}
                        {displayThaiDate(data.Date)}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกแพทย์ :{" "}
                  </label>
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    // onClick={handlePosition}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกแพทย์
                    </option>
                    <option className="option" value="Doctor">
                      {" "}
                      นางแพทย์หญิง ดาริส ปิ่นโต{" "}
                    </option>
                  </select>
                </div> */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกเวลา  <h className="text-red-600"> * </h>
                  </label>
                  <select
                    id="position"
                    name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    onChange={handleTime}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกเวลา
                    </option>
                    {timeArr.map((time) => (
                      <option
                        className="option"
                        value={JSON.stringify({
                          time: `${time}`,
                        })}
                      >
                        {" "}
                        {time}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <Link to="/postponeconfirm"> */}
                <div className="mb-6">
                  <button
                    type="submit"
                    onClick={checkData}
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    ถัดไป
                  </button>
                </div>
                {/* </Link> */}
                {/* <Link to="/postpone"> */}
                <div className="mb-6">
                  <button
                    onClick={backbutton}
                    className="w-full px-3 py-3 text-white bg-gray-300 rounded-md "
                  >
                    ยกเลิก
                  </button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
