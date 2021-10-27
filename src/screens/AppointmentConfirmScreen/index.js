import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router"; 

export default function AppointmentConfirmScreen() {
  const location = useLocation(); 
  const { symptom, date, doctorname, doctorid, timetableid, time } = 
    location.state; 
 
  console.log(symptom, date, doctorname, doctorid, timetableid, time); 
 
  const displayThaiDate = (date) => { 
    const result = new Date(date).toLocaleDateString("th-TH", { 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      weekday: "long", 
    }); 
    return result; 
  }; 
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
                  <p className="text-base text-left text-gray-400" >
                    {" "}
                    ชื่อ - นามสกุล : ลีโอนาโด เลิฟลี่
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
                  <p className="mt-2 text-base text-left text-gray-400" >
                    {" "}
                    วัน/เดือน/ปีเกิด : 20/7/2000{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" >
                    {" "}
                    เพศ : ชาย{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" >
                    {" "}
                    ที่อยู่ : 123 หมู่ 5 ถนนชิคาโก้ จังหวัด อิลลินอยส์ 52590
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
                  <p className="mt-2 text-base text-left text-gray-400" >
                    {" "}
                    เบอร์ติดต่อ : 0245678910
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
                    e-mail : LeoLovelove@gmail.com{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" >
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
                  <p className="mt-2 text-base text-left text-gray-400" >
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
                  <p className="mt-2 text-base text-left text-gray-400" >
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
                    type="submit"
                    className="w-full px-3 mt-6 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    ยืนยันการทำนัด
                  </button>
                </div>

                <Link to="/appointment">
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
