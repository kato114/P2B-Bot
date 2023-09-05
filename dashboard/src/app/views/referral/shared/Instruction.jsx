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
  const title = "Referral Rewards"
  const details = "Referral codes are written into every swap transaction and rewards data is processed directly from the blockchain. Enter the referral code's reward recipient address to check rewards. Rewards data updates every 20 minutes."

  return (
    <Grid container spacing={3} sx={{ p: '0 24px'}}>
      <H3>{title}</H3>
      <Paragraph>{details}</Paragraph>
    </Grid>
  );
};

export default Instruction;
