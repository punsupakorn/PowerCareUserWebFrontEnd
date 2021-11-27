import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../constants";
import { useHistory } from "react-router";

export default function AppointmentScreen() {
  const history = useHistory();
  const [DateSlot, setDateSlot] = useState([]);
  const [DoctorName, setDoctorName] = useState([]);
  const [Time, setTime] = useState([]);
  const [symptom, setsymptom] = useState("");
  const [date, setdate] = useState("");
  const [doctorid, setdoctorid] = useState("");
  const [doctorname, setdoctorname] = useState("");
  const [timetableid, settimetableid] = useState("");
  const [time, settime] = useState("");

  const getDate = () => {
    try {
      axios.get(server.APPOINTMENT).then((res) => {
        setDateSlot(res.data);
      });
    } catch (error) {}
  };

  const getDoctorName = (date) => {
    try {
      axios
        .post(`${server.APPOINTMENT}/name`, {
          Date: date,
        })
        .then((res) => {
          setDoctorName(res.data);
        });
    } catch (error) {}
  };

  const getTimeSlot = (TimeTableID) => {
    try {
      axios
        .post(`${server.APPOINTMENT}/time`, {
          TimeTableID: TimeTableID,
        })
        .then((res) => {
          // console.log(res);
          setTime(res.data);
        });
    } catch (error) {}
  };

  useEffect(async () => {
    getDate();
  }, []);

  const displayThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return result;
  };

  const handleSymptom = (e) => {
    const symptom = e.target.value;
    setsymptom(symptom);
  };

  const handleDate = async (e) => {
    const date = e.target.value;
    const data = JSON.parse(date);
    setdate(data.slot);
    getDoctorName(data.slot);
  };

  const handleDoctorName = (e) => {
    const doctorname = e.target.value;
    const data = JSON.parse(doctorname);
    settimetableid(data.timetableid);
    setdoctorid(data.doctorid);
    setdoctorname(data.name);
    getTimeSlot(data.timetableid);
  };

  const handleTime = (e) => {
    const time = e.target.value;
    const data = JSON.parse(time);
    settime(data.time);
  };

  // const handleSubmit = () => {
  //   try {
  //     axios
  //       .post(server.APPOINTMENT, {
  //         Symptom: symptom,
  //         Date: Date,
  //         DoctorName: DoctorName,
  //         Time: Time,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   } catch (error) {}
  // };

  const handleNext = () => {
    const form = { symtom: symptom, date: date, time: time };
    let data = Object.values(form).every((value) => value);
    if (data == false) {
      window.alert("โปรดกรอกข้อมูลให้ครบถ้วน");
    } else {
      history.replace({
        pathname: `/appointmentconfirm`,
        state: {
          symptom: symptom,
          date: date,
          doctorname: doctorname,
          doctorid: doctorid,
          timetableid: timetableid,
          time: time,
        },
      });
    }
  };

  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                ทำนัด
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
              <form>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    อาการ {" "}  <h className="text-red-600"> * </h>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    id="message"
                    placeholder="โปรดกรอกอาการของท่าน"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    defaultValue={""}
                    onChange={handleSymptom}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกวันที่  <h className="text-red-600"> * </h>
                  </label>
                  <select
                    onChange={handleDate}
                    // value={DateSlot}
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกวันที่
                    </option>
                    {DateSlot.map((slot) => (
                      <option
                        className="option"
                        value={JSON.stringify({
                          slot: `${slot}`,
                        })}
                        // onChange={getDoctorName}
                      >
                        {" "}
                        {displayThaiDate(slot)}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกแพทย์ {" "}  <h className="text-red-600"> * </h> 
                  </label>
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    onChange={handleDoctorName}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกแพทย์
                    </option>
                    {DoctorName.map((doctor) => (
                      <option
                        className="option"
                        value={JSON.stringify({
                          timetableid: `${doctor.TimeTableID}`,
                          doctorid: `${doctor.DocumentID}`,
                          name: `${doctor.Name}`,
                        })}
                      >
                        {" "}
                        {doctor.Name}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกเวลา <h className="text-red-600"> * </h>
                  </label>
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    onChange={handleTime}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกเวลา
                    </option>
                    {Time.map((slot) => (
                      <option
                        className="option"
                        value={JSON.stringify({
                          time: `${slot}`,
                        })}
                      >
                        {" "}
                        {slot}{" "}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <Link
                  to={{
                    pathname: `/appointmentconfirm`,
                    state: {
                      symptom: symptom,
                      date: date,
                      doctorname: doctorname,
                      doctorid: doctorid,
                      timetableid: timetableid,
                      time: time,
                    },
                  }}
                > */}
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    onClick={handleNext}
                  >
                    ถัดไป
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
