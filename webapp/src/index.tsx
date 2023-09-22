import React, { DispatchWithoutAction, FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import { WebAppProvider, useExpand } from "@vkruglikov/react-telegram-web-app";
import "antd/dist/reset.css";

import "./index.css";

import { MainLayout } from "./layout/MainLayout";
import { Trade } from "./pages/trade/Trade";
import { Overview } from "./pages/portfolio/Overview";
import { Deposit } from "./pages/transfer/Deposit";
import { Withdraw } from "./pages/transfer/Withdraw";

import { CRYPT_KEY } from "./config/constant";

import Web3 from "web3";

import {
  DydxClient,
  AccountResponseObject,
  ApiKeyCredentials,
  UserResponseObject,
} from "@dydxprotocol/v3-client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const [isExpanded, expand] = useExpand();
  const [smoothButtonsTransition, setSmoothButtonsTransition] = useState(true);

  // const queryParameters = new URLSearchParams(window.location.search);
  // const pKey = queryParameters.get("pKey");
  // const chat_id = queryParameters.get("chat_id");

  const HTTP_HOST = "https://api.dydx.exchange";
  const WS_HOST = "wss://api.dydx.exchange/v3/ws";

  const address = "0x5Ec887916bc9b11176f3CdE97d7B22608261f774";

  const web3 = new Web3();
  const client = new DydxClient(HTTP_HOST, { web3 });

  useEffect(() => {
    expand();

    async () => {
      const onboardingInformation: {
        apiKey: ApiKeyCredentials;
        user: UserResponseObject;
        account: AccountResponseObject;
      } = await client.onboarding.createUser(
        {
          starkKey: "71234abcd",
          starkKeyYCoordinate: "01234abcd",
          country: "SG",
        },
        address
      );
    };
  }, []);

  return (
    <WebAppProvider options={{ smoothButtonsTransition }}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/trade" element={<Trade />} />
          </Routes>
        </MainLayout>
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
