import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const SinglePortfolioRow = props => {
  const { row } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.curStockPrice.ticker}
      </TableCell>
      <TableCell align="right">{row.quantity}</TableCell>
      <TableCell align="right">
        {row.curStockPrice.pricePerStock * 0.001 * row.quantity}
      </TableCell>
    </TableRow>
  );
};

export default SinglePortfolioRow;
