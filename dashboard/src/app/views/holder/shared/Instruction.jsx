import { Grid, styled } from "@mui/material";

const H3 = styled("h3")(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "700",
  marginBottom: "0px",
  textTransform: "capitalize",
}));

const Paragraph = styled("p")(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: "400",
  marginBottom: "16px",
  textTransform: "capitalize",
}));

const Instruction = () => {
  const title = "Holder Rewards";
  const details =
    "Holders receive 1% of token swap fees (2% for those who migrated on-time), 40% of transaction fees, and 25% of referral fees as rewards. Rewards are proportional to the amount of $P2B-Bot held. Rewards are calculated in 2 hour intervals and are claimable after 24 hours.";

  return (
    <Grid container spacing={3} sx={{ p: "0 24px" }}>
      <H3>{title}</H3>
      <Paragraph>{details}</Paragraph>
    </Grid>
  );
};

export default Instruction;
