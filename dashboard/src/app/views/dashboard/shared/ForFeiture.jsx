import { Grid, Icon, styled } from '@mui/material';

const ContentBox = styled('div')(({theme}) => ({
  backgroundColor: 'rgba(241,116,37,.1)',
  border: '1px solid rgba(241,116,37,.1)',
  padding: '8px 15px',
  borderRadius: '5px',
}))

const Title = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  margin: '3px 0',
  display: 'flex',
  gap: '3px'
}));

const Paragraph = styled('p')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  margin: 0
}));

const ForFeiture = () => {
  const title = "Rewards Forfeiture"
  const details = "You can sell or transfer up to 200 $P2B-Bot every reward epoch (2 hours) without penalty. If you exceed this amount, all unclaimed rewards will be forfeited back into the rewards pool. This does not apply to referral rewards."

  return (
    <ContentBox>
      <Title>
        <Icon className="icon">info_outline</Icon>
        {title}
      </Title>
      <Paragraph>{details}</Paragraph>
    </ContentBox>
  );
};

export default ForFeiture;
