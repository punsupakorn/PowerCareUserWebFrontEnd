import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function OTPScreen() {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h5 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                ติดตามผล
              </h5>

              <div class="flex justify-center items-center  ">
                <div
                  class="
  
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
          mt-5
        "
                >
                  <img
                    class="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                    src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                    alt="image"
                  />

                  <div
                    class="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
                  >
                    <div class="flex flex-col justify-start items-baseline">
                      <h1 class="text-lg font-normal mb-0 text-gray-600 font-bold">
                        บัตรนัดผู้ป่วย
                      </h1>
                      <span class="text-xs text-indigo-300 mt-0">
                        PowerCare Clinic
                      </span>
                    </div>
                    <p class="text-xs text-gray-500 w-4/5">
                      ชื่อ : ลีโอนาโด เลิฟลี่
                    </p>
                    <p class="text-xs text-gray-500 w-5/5">
                      วันทำนัด : 3/07/2021
                    </p>
                    <p class="text-xs text-gray-500 w-4/5">เวลา : 13.30</p>
                    <p class="text-xs text-gray-500 w-5/5">
                      แพทย์ : แพทย์ดารีส ปินโต
                    </p>
                  </div>
                </div>
              </div>
              <div className="m-7">
                <form>
                  <p className="text-black dark:text-gray-400">
                    ติดตามผลครั้งที่ 1
                  </p>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400"></label>
                    <input
                      value="สบายดีนะคะ "
                      className="w-full h-20 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      readOnly
                    />
                  </div>
                  <p className="text-black dark:text-gray-400">
                    ติดตามผลครั้งที่ 2
                  </p>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400"></label>
                    <input
                      value="สบายดีนะคะ "
                      className="w-full h-20 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      readOnly
                    />
                  </div>
                  <p className="text-black dark:text-gray-400">
                    ติดตามผลครั้งที่ 3
                  </p>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400"></label>
                    <input
                      value="สบายดีนะคะ "
                      className="w-full h-20 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      readOnly
                    />
                  </div>

                  <Link to="/menuhome">
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
    </div>
  );
}
