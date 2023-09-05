import { Grid, styled } from '@mui/material';

const H3 = styled('h3')(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '0px',
  textTransform: 'capitalize',
}));

const Paragraph = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: '400',
  marginBottom: '16px',
  textTransform: 'capitalize',
}));

const Instruction = () => {
  return (
    <Grid container spacing={3} sx={{ p: '0 24px'}}>
      <H3>Revenue Share Dashboard</H3>
      <Paragraph>Holders can connect using this dashboard to view and claim their revenue share rewards. A minimum balance of 10 P2B-Bot is required. Claiming rewards claims all available unclaimed rewards and requires a minimum of 0.1 ETH accumulated. To lookup revenue shares for other wallets, use the <i>Holder Rewards</i> or <i>Referral Rewards</i> browser.</Paragraph>
    </Grid>
  );
};

export default Instruction;
