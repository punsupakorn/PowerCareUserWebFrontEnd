import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { Modal } from 'react-bootstrap';
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { HiCheckCircle } from "react-icons/hi";

export default function CancelScreen() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);

  const littleLorem = (
    <center>
      <p>คุณต้องการยกเลิกการทำนัดนี้หรือไม่ ?</p>
    </center>
  );

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
              <form
              // action="https://api.web3forms.com/submit"
              // method="POST"
              // id="form"
              >
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    ยืนยันการทำนัด :{" "}
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
                {/* <Link to="/appointmentconfirm"> */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-3 text-white bg-red-700 rounded-md "
                    // onClick={handleShow}
                    onClick={() => setOpenFirst(true)}
                  >
                    ยกเลิกการทำนัด
                  </button>

                  <Modal
                    open={openFirst}
                    onClose={() => setOpenFirst(false)}
                    center
                  >
                    <center>
                      <p className="font-bold">คำเตือน</p>
                    </center>
                    <div
                      className="
        flex
        justify-between
        items-center
        w-50
        py-2
        mb-3
        border-b-2 border-gray-100
      "
                    />
                    {littleLorem}
                    <div
                      className="
        flex
        justify-between
        items-center
        w-50
        py-2
        mb-3
        border-b-2 border-gray-100
      "
                    />
                    <center>
                      <button
                        type="submit"
                        className="w-80 px-1 py-3 text-white bg-red-700 rounded-md mt-3"
                        // onClick={handleShow}
                        onClick={() => setOpenSecond(true)}
                      >
                        ยืนยันยกเลิกการทำนัด
                      </button>
                      <div className="mb-6"></div>
                    </center>
                  </Modal>
                  <Modal
                    open={openSecond}
                    onClose={() => setOpenSecond(false)}
                    center
                  >
                    <center>
                      <p className="font-bold">ยืนยันการยกเลิกนัด </p>
                    </center>
                    <div
                      className="
        flex
        justify-between
        items-center
        w-50
        py-2
        mb-3
        border-b-2 border-gray-100
      "
                    />

                    <center>
                      <div className="w-80">
                        <HiCheckCircle size="150px" color="#66bb6a" />
                      </div>
                      <p className="font-bold">เสร็จสิ้น </p>
                    </center>
                    <div
                      className="
        flex
        justify-between
        items-center
        w-50
        py-2
        mb-3
        border-b-2 border-gray-100
      "
                    />
                    <center>
                      <Link to="/menuhome">
                        <button
                          type="submit"
                          className="w-80 px-1 py-3 text-white bg-gray-300 rounded-md mt-3"
                          // onClick={handleShow}
                        >
                          กลับสู่หน้าหลัก
                        </button>{" "}
                      </Link>
                      <div className="mb-6"></div>
                    </center>
                  </Modal>
                </div>
                {/* </Link> */}
                <Link to="/menuhome">
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