import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BuyStockForm from './buyStockForm';

const BuyStocksWrapper = props => (
  <div>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
      >
        <BuyStockForm />
      </Typography>
    </Container>
  </div>
);

export default BuyStocksWrapper;
