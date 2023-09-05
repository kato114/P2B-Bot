import { ConfigProvider, theme } from "antd";
import { useThemeParams } from "@vkruglikov/react-telegram-web-app";

export const MainLayout = (props: any) => {
  const [colorScheme, themeParams] = useThemeParams();

  return (
    <div>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === "dark"
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }
      >
        <div className="contentWrapper">{props.children}</div>
      </ConfigProvider>
    </div>
  );
};
