import {
  Box,
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const CardHeader = styled(Box)(() => ({
  display: "flex",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  borderBottom: "1px solid #2125291a",
}));

const CardBody = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "12px",
  alignItems: "center",
  width: "100%",
}));

const SharePanel = styled("span")(() => ({
  width: "90%",
  lineHeight: "11px",
  backgroundColor: "#2125291a",
  border: "1px solid #2125291a",
  color: "#212529",
  padding: "4px 8px",
  marginBottom: "1rem",
  borderRadius: "0.375rem",
  position: "relative",
  fontWeight: "700",
}));

const CenterText = styled("span")(() => ({
  position: "absolute",
  width: "100%",
  left: 0,
  textAlign: "center",
  fontWeight: "400",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "8px",
  paddingLeft: "24px",
  paddingRight: "24px",
  overflow: "hidden",
  borderRadius: "300px",
  transition: "all 250ms",
  border: "1px solid",
  "&:hover": {
    color: "#ffffff",
    background: `${theme.palette.primary.main} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`,
    fallbacks: [{ color: "white !important" }],
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  width: "100%",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": {
    opacity: 0.6,
    fontSize: "44px",
    color: theme.palette.primary.main,
  },
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  fontSize: "1rem",
  fontWeight: "700",
}));

const TokenCard = () => {
  return (
    <StyledCard elevation={6}>
      <ContentBox>
        <CardHeader>
          <Heading>Token Holdings</Heading>
          <StyledButton>
            <b>Claim</b>: 0 P2B-Bot
          </StyledButton>
        </CardHeader>
        <CardBody>
          <SharePanel>
            Wallet:
            <CenterText>0 P2B-Bot</CenterText>
          </SharePanel>
          <SharePanel>
            AUTO-COMPOUND:
            <CenterText>0 P2B-Bot</CenterText>
          </SharePanel>
          <i>
            Both wallet and auto-compound holdings are used to calculate your
            share of rewards.
          </i>
        </CardBody>

        <CardHeader>
          <Heading>Claimed Rewards</Heading>
          <StyledButton>
            <b>Claim</b>: 0 ETH
          </StyledButton>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ px: 3 }}>Time</TableCell>
                <TableCell sx={{ px: 3 }}>Amount</TableCell>
                <TableCell sx={{ px: 3, minWidth: "170px" }}>
                  Transaction
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow hover>
                <TableCell sx={{ px: 3 }}>23:21:34 2/8/2023</TableCell>
                <TableCell sx={{ px: 3 }}>12.3 ETH</TableCell>
                <TableCell sx={{ px: 3 }}>
                  0xc960502127f...44b5d5c63e0
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </ContentBox>
    </StyledCard>
  );
};

export default TokenCard;
