import { Box, Card, Grid, Icon, styled } from '@mui/material';
import { H3 } from '../../../components/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));

const StatCards = () => {
  const cardList = [
    { name: 'Total Referrals', amount: '--', icon: 'diversity_3' },
    { name: 'Transactions', amount: '--', icon: 'paid' },
    { name: 'Unclaimed Rewards', amount: '--ETH', icon: 'mark_email_unread' },
    { name: 'Claimable Rewards', amount: '--ETH', icon: 'emoji_events' },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <H3>{item.name}</H3>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
