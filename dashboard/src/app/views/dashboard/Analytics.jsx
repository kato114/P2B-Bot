import { Grid, styled, useTheme } from '@mui/material';
import { Fragment, useEffect } from 'react';
import HolderRewards from './shared/HolderRewards';
import ReferralRewards from './shared/ReferralRewards';
import HolderStatCards from './shared/HolderStatCards';
import ReferralStatCards from './shared/ReferralStatCards';
import Instruction from './shared/Instruction';
import ForFeiture from './shared/ForFeiture';
import TokenCard from './shared/TokenCard';
import axios from 'axios';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H2 = styled('h2')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '16px',
  textTransform: 'capitalize',
}));

const H3 = styled('h3')(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: '700',
  marginBottom: '16px',
  textTransform: 'capitalize',
}));

const Divider = styled('hr')(({ theme }) => ({
  margin: '30px 0px',
}));

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Instruction />
            <ForFeiture />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TokenCard />
          </Grid>
          
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <H2>Your Rewards History</H2>

            <H3>Holder Rewards</H3>
            <HolderStatCards />
            <HolderRewards />
            
            <Divider />
            
            <H3>Referral Rewards</H3>
            <ReferralStatCards />
            <ReferralRewards />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
