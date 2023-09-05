import { Icon, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { themeShadows } from '../MatxTheme/themeColors';
import useSettings from '../../hooks/useSettings';
import { topBarHeight } from '../../utils/constant';
import React from 'react';
import UserSetting from '../UserSetting/UserSetting';
import { Web3Button } from '@web3modal/react';
// import { useLogin, Web3Button } from "@thirdweb-dev/react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: 'all 0.3s ease',
  boxShadow: themeShadows[8],
  height: topBarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const ConnectIcon = styled('span')(({ theme }) => ({
  cursor: 'pointer',
  borderRadius: '50%',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: 10,
  '> span': {
    fontSize: '32px',
    color: theme.palette.text.primary
  }
}));

const Layout1Topbar = () => {
  // const { login, isLoading } = useLogin();
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>
        </Box>

        <Box display="flex" alignItems="center">
          <Tooltip title="Connect" placement="left">
            <ConnectIcon>
              <Icon>telegram</Icon>
            </ConnectIcon>
          </Tooltip>

          <UserSetting />

          <Web3Button icon="show" label="Connect Wallet" balance="hide" />
          {/* <Web3Button
            action={() =>
              login({
                domain: "https://your-domain.com", // Your dapp domain
                statement: "My statement", // Text that the user will sign
                uri: "https://your-domain.com/login", // RFC 3986 URI referring to the resource that is the subject of the signing
                version: "1.0", // The current version of the message, which MUST be 1 for this specification.
                chainId: "mainnet", // Chain ID to which the session is bound
                nonce: "my-nonce", // randomized token typically used to prevent replay attacks
                expirationTime: new Date(2021, 1, 1), // When this message expires
                invalidBefore: new Date(2020, 12, 1), // When this message becomes valid
                resources: ["balance", "history", "info"], // A list of information or references to information the user wishes to have resolved
              })
            }
          >
            Login
          </Web3Button> */}
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default React.memo(Layout1Topbar);
