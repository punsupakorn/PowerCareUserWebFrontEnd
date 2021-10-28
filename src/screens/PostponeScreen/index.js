
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PostponeScreen() {

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
                    <b>ชื่อ - นามสกุล :</b> ลีโอนาโด เลิฟลี่
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>วัน/เดือน/ปีเกิด :</b> 20/7/2000{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>เพศ :</b>zชาย{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>ที่อยู่ :</b> 123 หมู่ 5 ถนนชิคาโก้ จังหวัด อิลลินอยส์ 52590
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>เบอร์ติดต่อ :</b> 0245678910
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>e-mail :</b> LeoLovelove@gmail.com{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>อาการ :</b> เป็นสิวแดงนูนรักษาไม่หายสักที{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>วันทำนัด : </b>3/07/2021{" "}
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                    <b>เวลา :</b> 13.30
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
                  <p className="mt-2 text-base text-left text-gray-400" id="result">
                    {" "}
                   <b> แพทย์ : </b>แพทย์ดารีส ปินโต{" "}
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
                <Link to="/postponeselect">
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    เลื่อนทำนัด
                  </button>
                </div>
                </Link>
                <Link to="/menuhome">
                <div className="mb-6">
                  <button
                    className="w-full px-3 py-3 text-white bg-gray-300 rounded-md "
                  >
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
