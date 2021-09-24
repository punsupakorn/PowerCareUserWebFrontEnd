import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "axios";

export default function AppointmentScreen() {
  const [date] = useState();
  const [Symptom, setSymptom] = useState("");
  const [Date, setDate] = useState("");
  const [DoctorName, setDoctorName] = useState("");
  const [Time, setTime] = useState("");

  
  const handleSymptom = (e) => {
    const symptom = e.target.value;
    setSymptom(symptom);
  };

  const handleDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const handleDoctorName = (e) => {
    const doctorname = e.target.value;
    setDoctorName(doctorname);
  };

  const handleTime = (e) => {
    const time = e.target.value;
    setTime(time);
  };
  
  const handleSubmit = () => {
    try {
      axios
        .post("/Appointment", {
          Symptom: Symptom,
          Date: Date,
          DoctorName: DoctorName,
          Time: Time,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
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
              <form
              >
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    อาการ :{" "}
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
                   เลือกวันที่
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
                    <option className="option" value="วันจันทร์ 16 สิงหาคม 2542 ">
                      {" "}
                      วันจันทร์ 16 สิงหาคม 2542 {" "}
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกแพทย์ :{" "}
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
                    <option className="option" value="นางแพทย์หญิง ดาริส ปิ่นโต">
                      {" "}
                      นางแพทย์หญิง ดาริส ปิ่นโต{" "}
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกเวลา :{" "}
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
                    <option className="option" value="11.00 - 12.00">
                      {" "}
                      11.00 - 12.00{" "}
                    </option>
                  </select>
                </div>
                <Link to="/appointmentconfirm">
                  <div className="mb-6">
                    <button
                      type="button"
                      className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                      onClick={handleSubmit}
                    >
                      ถัดไป
                    </button>
                  </div>
                </Link>
                <Link to="/menuhome">
                  <div className="mb-6">
                    <button className="w-full px-3 py-3 text-white bg-gray-300 rounded-md "
>
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
