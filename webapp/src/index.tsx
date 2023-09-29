import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import axios from "axios";
import { WebAppProvider, useExpand } from "@vkruglikov/react-telegram-web-app";
import "antd/dist/reset.css";

import "./index.css";

import { MainLayout } from "./layout/MainLayout";
import { Trade } from "./pages/trade/Trade";
import { Overview } from "./pages/portfolio/Overview";
import { Position } from "./pages/portfolio/Position";
import { Orders } from "./pages/portfolio/Orders";
import { Deposit } from "./pages/transfer/Deposit";
import { Withdraw } from "./pages/transfer/Withdraw";

import { API_URL } from "./config/constant";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const [isExpanded, expand] = useExpand();
  const [smoothButtonsTransition, setSmoothButtonsTransition] = useState(true);

  const [tgid, setTgid] = useState("");
  const [userData, setUserData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const queryParameters = new URLSearchParams(window.location.search);
  let tg_id =
    queryParameters.get("tgid") !== null ? queryParameters.get("tgid") : "";

  const init = () => {
    axios
      .get(API_URL + "/account/user/" + tg_id)
      .then((response) => {
        if (response.data.succeed == true) {
          setLoading(false);
          setUserData(response.data.data);
        } else {
          setTgid("");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (tg_id != null && tg_id != "") {
      init();
      setTgid(tg_id);
      localStorage.setItem("tgid", tg_id);
    } else {
      localStorage.setItem("tgid", "");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tg_id != null && tg_id != "") {
        init();
      }
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (tgid == "") {
    return (
      <div style={{ textAlign: "center", marginTop: "48vh" }}>
        You Need To Create Account First
      </div>
    );
  }

  return (
    <WebAppProvider options={{ smoothButtonsTransition }}>
      <Router>
        {userData != undefined ? (
          <MainLayout>
            <Routes>
              <Route path="/" element={<Overview userData={userData} />} />
              <Route
                path="/deposit"
                element={<Deposit userData={userData} />}
              />
              <Route
                path="/withdraw"
                element={<Withdraw userData={userData} />}
              />
              <Route path="/trade" element={<Trade userData={userData} />} />
              <Route path="/order" element={<Orders userData={userData} />} />
              <Route path="/position/:market" element={<Position userData={userData} init={init} />} />
            </Routes>
          </MainLayout>
        ) : loading == true ? (
          <div style={{ textAlign: "center", paddingTop: "48vh" }}>
            Loading...
          </div>
        ) : (
          <div style={{ textAlign: "center", paddingTop: "48vh" }}>
            You Need To Create Account First
          </div>
        )}
      </Router>
    </WebAppProvider>
  );
};

root.render(<App />);

// import MainButtonDemo from "./MainButtonDemo";
// import BackButtonDemo from "./BackButtonDemo";
// import ShowPopupDemo from "./ShowPopupDemo";
// import HapticFeedbackDemo from "./HapticFeedbackDemo";
// import ScanQrPopupDemo from "./ScanQrPopupDemo";
// import ExpandDemo from "./ExpandDemo";
// import useBetaVersion from "./useBetaVersion";

// const DemoApp: FC<{
//   onChangeTransition: DispatchWithoutAction;
// }> = ({ onChangeTransition }) => {
//   const [colorScheme, themeParams] = useThemeParams();
//   const [isBetaVersion, handleRequestBeta] = useBetaVersion(true);
//   const [activeBtn, setActiveBtn] = useState(true);

//   return (
//     <div>
//       <ConfigProvider
//         theme={
//           themeParams.text_color
//             ? {
//                 algorithm:
//                   colorScheme === "dark"
//                     ? theme.darkAlgorithm
//                     : theme.defaultAlgorithm,
//                 token: {
//                   colorText: themeParams.text_color,
//                   colorPrimary: themeParams.button_color,
//                   colorBgBase: themeParams.bg_color,
//                 },
//               }
//             : undefined
//         }
//       >
//         <header className="App-header">P2B</header>
//         <div className="contentWrapper">
//           {isBetaVersion && (
//             <div className="betaVersion">
//               <h3>WARNING: BETA VERSION</h3>
//               <button onClick={() => setActiveBtn((state) => !state)}>
//                 change button
//               </button>
//               <button onClick={onChangeTransition}>change </button>
//             </div>
//           )}
//           <ExpandDemo />
//           {!activeBtn ? (
//             <MainButtonDemo
//               initialValues={{
//                 show: isBetaVersion,
//                 text: "SECOND BUTTON",
//                 progress: true,
//               }}
//               key="1"
//             />
//           ) : (
//             <MainButtonDemo
//               key="2"
//               initialValues={{
//                 show: isBetaVersion,
//               }}
//             />
//           )}
//           <BackButtonDemo />
//           <ShowPopupDemo />
//           <HapticFeedbackDemo />
//           <ScanQrPopupDemo />
//         </div>
//       </ConfigProvider>
//     </div>
//   );
// };
