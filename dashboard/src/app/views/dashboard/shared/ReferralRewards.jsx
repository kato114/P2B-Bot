import {
  Box,
  Card,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const ReferralRewards = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>referral reward history</Title>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 , width: '50px'}}>
                #
              </TableCell>
              <TableCell sx={{ px: 3 }}>
                Block
              </TableCell>
              <TableCell sx={{ px: 3, minWidth: '155px' }}>
                Date
              </TableCell>
              <TableCell sx={{ px: 3, minWidth: '220px' }}>
                Wallet
              </TableCell>
              <TableCell sx={{ px: 3, textAlign: 'center' }}>
                Swap Cost/Gain (ETH)
              </TableCell>
              <TableCell sx={{ px: 3, textAlign: 'center' }}>
                Referral Reward (ETH)
              </TableCell>
              <TableCell sx={{ px: 3, textAlign: 'end' }}>
                Transaction
              </TableCell>
              <TableCell sx={{ px: 3 }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {referralList.map((referral, index) => (
              <TableRow key={index} hover>
                <TableCell sx={{ textAlign: 'center' }}>
                  {index+1}
                </TableCell>
                <TableCell sx={{ px: 0 }}>
                  <Link href={'https://etherscan.io/block/'+referral.block} target='_blank'>
                    {referral.block}
                  </Link>
                </TableCell>
                <TableCell sx={{ px: 0 }}>
                  {referral.date}
                </TableCell>
                <TableCell sx={{ px: 0 }}>
                  <Link href={'https://etherscan.io/address/'+referral.wallet} target='_blank'>
                    {referral.wallet.substring(0, 8)}...{referral.wallet.substring(referral.wallet.length-8)}
                  </Link>
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {referral.swap} ETH
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {referral.reward} ETH
                </TableCell>
                <TableCell sx={{ textAlign: 'end', letterSpacing:'.5px' }}>
                  <Link href={'https://etherscan.io/tx/'+referral.transaction} target='_blank'>
                    {referral.transaction.substring(0, 20)}...
                  </Link>
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {referral.status === 'success' && <Small bgcolor={bgPrimary}>success</Small>}
                  {referral.status === 'error' && <Small bgcolor={bgError}>error</Small>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const referralList = [
  {
    block: '17971061',
    date: '12:12:12 1/1/2000',
    wallet: '0x543475740a0FC53233FD79256c0a55B247e2a74D',
    swap: 15,
    reward: 0,
    transaction: '0x8fff7025be3e41bdfad67cd5acd46ee453077d48f4f83cb33b225a7ed151f525 ',
    status: 'success'
  },
  {
    block: '17971061',
    date: '13:23:53 1/1/2000',
    wallet: '0x543475740a0FC53233FD79256c0a55B247e2a74D',
    swap: 23,
    reward: 0,
    transaction: '0x076cc0d7a276f04d6f597aafdbd4e7907e9d59897886cae71d639f3ebe9bbe9e',
    status: 'error'
  },
  {
    block: '17971061',
    date: '21:21:21 1/1/2000',
    wallet: '0x543475740a0FC53233FD79256c0a55B247e2a74D',
    swap: 234,
    reward: 0,
    transaction: '0xc960502127fe26480c86ec2c048c9ee5fe120107801ffb5cb925944b5d5c63e0',
    status: 'success'
  },
  {
    block: '17971061',
    date: '12:12:12 1/1/2000',
    wallet: '0x543475740a0FC53233FD79256c0a55B247e2a74D',
    swap: 342,
    reward: 0,
    transaction: '0x076cc0d7a276f04d6f597aafdbd4e7907e9d59897886cae71d639f3ebe9bbe9e',
    status: 'error'
  },
  {
    block: '17971061',
    date: '12:12:12 1/1/2000',
    wallet: '0x543475740a0FC53233FD79256c0a55B247e2a74D',
    swap: 12,
    reward: 0,
    transaction: '0xc960502127fe26480c86ec2c048c9ee5fe120107801ffb5cb925944b5d5c63e0',
    status: 'success'
  },
];

export default ReferralRewards;
