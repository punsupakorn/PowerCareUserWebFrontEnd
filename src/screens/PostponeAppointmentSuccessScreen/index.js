import React from "react";
import Success from "../../icons/success";
import { BrowserRouter as  Link } from "react-router-dom";
function PostponeAppointmentSuccessScreen() {
  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="py-4 px-8 mt-3">
            <div className="flex flex-col mb-8">
            <center ><Success /></center>
              <h2 className="text-gray-700 text-center font-semibold text-2xl tracking-wide mt-5 ">
                เลื่อนการทำนัดสำเร็จ
              </h2>
            </div>
            <div className="bg-gray-100 rounded-lg">
              <div className="py-4 px-4">
                <div className="flex flex-col">
                  <div className="flex flex-col text-sm text-gray-500">
                    <span className="mb-1">ชื่อ - นามสกุล : </span>
                    <span className="mb-1">วันทำนัด : </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
            <Link to="/menuhome">
                <div className="mb-6">
                  <button
                    className="w-full px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none "
                  >
                    กลับสู่หน้าหลัก
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

export default PostponeAppointmentSuccessScreen;
