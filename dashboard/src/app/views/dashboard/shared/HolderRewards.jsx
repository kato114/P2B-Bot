import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from '../../../components/Typography';

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

const HolderRewards = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>holder rewards history</Title>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }}>
                Snapshot Block
              </TableCell>
              <TableCell sx={{ px: 3 }}>
                Time
              </TableCell>
              <TableCell sx={{ px: 3 }}>
                Rewards
              </TableCell>
              <TableCell sx={{ px: 3 }}>
                Unlock
              </TableCell>
              <TableCell sx={{ px: 3 }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Paragraph sx={{ m: 0, ml: 4 }}>123456789</Paragraph>
                </TableCell>

                <TableCell align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  12:36:12 25/8/2023
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left">
                  ${product.price > 999 ? (product.price / 1000).toFixed(1) + 'k' : product.price}
                </TableCell>

                <TableCell sx={{ px: 0 }}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left">
                  <Small bgcolor={bgError}>out of stock</Small>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/products/headphone-2.jpg',
    name: 'earphone',
    price: 100,
    available: 15,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'earphone',
    price: 1500,
    available: 30,
  },
];

export default HolderRewards;
