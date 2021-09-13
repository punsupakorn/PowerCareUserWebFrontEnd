import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function MenuHomeScreen() {
  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h5 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                PowerCare Clinic
              </h5>

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
                <Link to="/appointment">
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-80 font-bold px-3 py-4 text-white font-bold bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    >
                      ทำนัด
                    </button>
                  </div>
                </Link>
                <Link to="/followup">
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-80 font-bold px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    >
                      ติดตามผล
                    </button>
                  </div>
                </Link>
                <Link to="/postpone">
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-80 font-bold px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    >
                      เลื่อน / ยกเลิกการทำนัด
                    </button>
                  </div>
                </Link>
                <Link to="/edituserprofile">
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-80 font-bold px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    >
                      แก้ไขข้อมูลส่วนตัว
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
