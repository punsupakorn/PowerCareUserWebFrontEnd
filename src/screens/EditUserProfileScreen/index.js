import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function EditUserProfileScreen() {
  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                แก้ไขข้อมูลส่วนตัว
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
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    ชื่อ-นามสกุล :{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" นายลีโอนาโด เลิฟลี่"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เพศ :
                  </label>
                  {/* <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="ชาย "
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  /> */}
                  <select
                    // id="position"
                    // name="Position"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 "
                    // onClick={handlePosition}
                  >
                    <option disabled selected value>
                      {" "}
                      กรุณาเลือกเพศ
                    </option>
                    <option className="option" value="Doctor">
                      {" "}
                      ชาย{" "}
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    ที่อยู่ :{" "}
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    id="message"
                    placeholder="123 หมู่ 5 ถนนชิคาโก้ จังหวัด อิลลินอยส์ 52590"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    เบอร์ติดต่อ :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="0987654321"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    อีเมลล์ :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="LeoLovelove@gmail.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-indigo-300 rounded-md focus:bg-indigo-200 focus:outline-none"
                    >
                      บันทึก
                    </button>
                  </div>
                <Link to="/menuhome">
                <div className="mb-6">
                  <button
                    className="w-full px-3 py-4 text-white bg-gray-300 rounded-md "
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
