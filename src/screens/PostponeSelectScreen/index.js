
import { BrowserRouter as  Link } from "react-router-dom";
import { useState } from "react";

export default function PostponeSelectScreen() {
  const [date, setDate] = useState();
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
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
               
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                   ชื่อ - นามสกุล :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="นายลีโอนาโด เลิฟลี่"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                   วันที่ทำนัดเดิม :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="3/07/2021"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                   เวลาทำนัดเดิม : {" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="13.00 น."
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label
                    className="block font-bold mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    วันที่ / เวลา ทำนัดใหม่ :{" "}
                  </label>
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    // onChange={handleDate}

                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกวันที่
                    </option>
                    <option className="option" value="Doctor">
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
                </div>
                <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เลือกเวลา :{" "}
                  </label>
                  <select
                    id="position"
                    name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    // onClick={handlePosition}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกเวลา
                    </option>
                    <option className="option" value="Doctor">
                      {" "}
                      11.00 - 12.00{" "}
                    </option>
                    </select>
                </div>
                <Link to="/postponeconfirm">
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    ถัดไป
                  </button>
                
                </div>
                </Link>
                <Link to="/postpone">
                <div className="mb-6">
                  <button
                    className="w-full px-3 py-3 text-white bg-gray-300 rounded-md "
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
