import React, { DispatchWithoutAction, FC, useState } from "react";
import ReactDOM from "react-dom/client";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import "antd/dist/reset.css";

import "./index.css";

import { MainLayout } from "./layout/MainLayout";
import { Trade } from "./pages/trade/Trade";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const [smoothButtonsTransition, setSmoothButtonsTransition] = useState(true);

  return (
    <WebAppProvider options={{ smoothButtonsTransition }}>
      <MainLayout>
        <Trade />
      </MainLayout>
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
