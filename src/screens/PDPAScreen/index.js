import { useHistory, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import liff from "@line/liff";
import { useState, useEffect } from "react";
import axios from "axios";
import { server, YES } from "../../constants";

export default function PDPAScreen() {

    const [accessToken, setAccessToken] = useState("");
    const history = useHistory();
    const [loading, setloading] = useState(true)


    useEffect(() => {
      initLine();
    });

    const userprofile = () => {
        try {
            history.replace("/userprofile")
        } catch (error) {
            
        }
    }
  
    const initLine = async () => {
      liff.init(
        { liffId: "1656423908-z2DErD50" },
        () => {
          if (
            liff.isLoggedIn({
              redirectUri: "https://main.d3w2lvda55pxgd.amplifyapp.com",
            })
          ) {
            runApp();
          } else {
            liff.login();
          }
        },
        (err) => console.error(err)
      );
    };
  
    const runApp = async () => {
      const accessToken = liff.getAccessToken();
      setAccessToken(accessToken);
      console.log("accessToken : ", accessToken);
      await axios.get(`${server.LOGIN}/${accessToken}`).then((res) => {
        const check = res.data;
        if (check === true) {
          localStorage.setItem("AccessToken", accessToken);
          history.replace("/menuhome");
        }else{
          localStorage.setItem("AccessToken", accessToken);
          setloading(false);
        }
      });
    };
if(loading ===  true){
  return (<div>loading...</div>)
}else{
  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h5 className="my-3 text-xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                ???????????????????????????????????????????????????????????????
              </h5>
              <div class="container mx-auto py-10 flex justify-center h-screen">
        <div class="w-12/12 pl-4  h-full flex flex-col">
          <div class="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
            ????????????????????????
          </div>

          <div
            class="w-full h-full overflow-auto text-left shadow bg-white"
            id="journal-scroll"
          >
            ????????????????????????????????????????????????????????????????????????????????????????????? PowerCare OA
            ??????????????????????????????????????????????????????????????????????????? (???????????????????????????????????????????????? "???????????????????????????????????????)
            ??????????????????????????? PowerCare OA (??????????????????????????????????????????????????????????????? ?????????????????????)
            ????????????????????????????????????????????? (??????????????????????????????????????????????????? ?????????????????????) ????????????????????? LINE Application
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            <p>
              {" "}
              &nbsp; 1.1
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp; 1.2 ????????????????????????????????????????????????????????????????????????????????? PowerCare OA ?????? Feature
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????, ?????????????????????????????????????????????????????? ???
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              Feature
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              PowerCare OA ????????? ??????????????????????????????????????????????????? (User Profile)
            </p>
            <p>
              &nbsp;2.1 ??????????????????????????????????????????????????????????????????????????? PowerCare OA
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (User
              Profile)
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp;2.2
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ?????????????????????????????????????????? ??????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <p>
              &nbsp;3.1 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (AS IS)
              ??????????????????????????? (AS AVAILABLE) ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???
              ??????????????????????????????????????????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp;3.2 ????????????????????????????????????????????????????????????????????????????????? ???????????????
              ???????????????????????????????????????????????????????????????????????????????????????????????????
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <p>
              &nbsp;3.3
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??? ?????????????????????????????????????????????????????? ??? ???????????????????????????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp;4.1 ??????????????????????????????????????????????????????????????????????????????????????? PowerCare OA
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              PowerCare OA
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ???{" "}
            </p>
            <p>
              &nbsp;4.2 ??????????????????????????????????????????????????????????????????????????????????????? PowerCare OA
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              PowerCare OA
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ???
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp;6.1
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              / ?????????????????????????????????????????? / ??????????????????????????????????????? /
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????? / ??????????????????????????????????????????????????????????????????????????? /
              ?????????????????????????????????????????????????????? ???
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              / ?????????????????????????????????????????? ???
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              /
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??? ?????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <p>
              &nbsp;6.2
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp;7.1 ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ????????????????????????????????????????????????????????????????????????????????????????????? ??? ?????????????????????????????????????????????????????????????????????????????????{" "}
            </p>
            <p>
              &nbsp;7.2
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ???
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ???????????????????????????????????????????????? PowerCare OA
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              (?????????????????????????????? ?????????????????? ???????????????
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????)
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              PowerCare OA
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ???
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              ??? ?????????????????????????????????
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <div className="mb-6">
                {/* <Link to ="/userprofile"> */}
              <button onClick ={userprofile} className="w-full px-3 py-3 text-white justify-center  bg-indigo-300 rounded-md ">
                ?????????????????? ???????????????????????????
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
