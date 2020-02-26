import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const SingleTransaction = props => {
  const { row } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.curStockPrice.ticker}
      </TableCell>
      <TableCell align="right">{row.action}</TableCell>
      <TableCell align="right">{row.quantity}</TableCell>
      <TableCell align="right">
        {row.paidPerShare * 0.001 * row.quantity}
      </TableCell>
    </TableRow>
  );
};

export default SingleTransaction;
