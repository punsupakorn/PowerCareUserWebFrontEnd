import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PostponeConfirmScreen() {
  return (
    <div classname="bg-indigo-200 h-screen w-screen">
    <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
              ยืนยันการยกเลิกนัด         </h1>

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
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  ยินยันการทำนัด :{" "}
                </label>
                <p className="text-base text-left text-gray-400" id="result">
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
                <p className="text-base text-left text-gray-400" id="result">
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
                <p className="text-base text-left text-gray-400" id="result">
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
                <p className="text-base text-left text-gray-400" id="result">
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
                <p className="text-base text-left text-gray-400" id="result">
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
                <p className="text-base text-left text-gray-400" id="result">
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
                <p className="text-base text-left text-gray-400" id="result">
                  {" "}
                  อาการ : เป็นสิวแดงนูนรักษาไม่หายสักที{" "}
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
                <p className="text-base text-left text-gray-400" id="result">
                  {" "}
                  วันทำนัด : 3/07/2021{" "}
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
                <p className="text-base text-left text-gray-400" id="result">
                  {" "}
                  เวลา : 13.30
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
                <p className="text-base text-left text-gray-400" id="result">
                  {" "}
                  แพทย์ : แพทย์ดารีส ปินโต{" "}
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
          <span class="text-xs text-indigo-300 mt-0">PowerCare Clinic</span>
        </div>
        <p class="text-xs text-gray-500 w-4/5">
        ชื่อ : ลีโอนาโด เลิฟลี่
        </p>
        <p class="text-xs text-gray-500 w-5/5">
        วันทำนัด : 3/07/2021
        </p>
        <p class="text-xs text-gray-500 w-4/5">
        เวลา : 13.30
        </p>
        <p class="text-xs text-gray-500 w-5/5">
        แพทย์ : แพทย์ดารีส ปินโต
        </p>

      </div>
    </div>
  </div>
              <Link to="/menuhome">
                <div className="mb-6">
                  <button className="w-full px-3 mt-6 py-4 text-white bg-red-700 rounded-md focus:bg-indigo-200 focus:outline-none">
                    ยกเลิกการทำนัด
                  </button>
                </div>
              </Link>
         
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    ยืนยันการทำนัด
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
