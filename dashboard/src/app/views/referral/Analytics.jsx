import { Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import Instruction from './shared/Instruction';
import StatCards from './shared/StatCards';
import ReferralRewards from './shared/ReferralRewards';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Divider = styled('hr')(({ theme }) => ({
  marginBottom: '30px',
}));

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Instruction />
            <Divider/>
            <StatCards />
            <ReferralRewards />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
